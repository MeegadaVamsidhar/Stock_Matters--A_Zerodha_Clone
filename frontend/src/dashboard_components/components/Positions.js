import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Fetch user's positions from MongoDB
    axios.get("http://localhost:3002/allPositions")
      .then(async (res) => {
        const dbPositions = res.data;
        if (dbPositions.length === 0) {
            setLoading(false);
            return;
        }

        // 2. Extract instrument names, append '.NS' to get India live stock data
        const symbolsStr = dbPositions.map(item => `${item.name}.NS`).join(',');

        try {
            // 3. Fetch live data for these specific positions
            const liveDataRes = await axios.get(`http://localhost:3002/stock?symbols=${symbolsStr}`);
            const liveData = liveDataRes.data;

            // 4. Merge live prices into the DB positions
            const mergedPositions = dbPositions.map((dbItem) => {
                const liveMatch = liveData.find(live => live.symbol === `${dbItem.name}.NS`);
                if (liveMatch) {
                    // Update volatile stats with live values
                    return {
                        ...dbItem,
                        price: liveMatch.price, // Live LTP
                        net: liveMatch.net,
                        day: liveMatch.day,
                        isLoss: liveMatch.isLoss
                    };
                }
                return dbItem;
            });

            setAllPositions(mergedPositions);
        } catch (err) {
            console.error("Failed to fetch live prices for positions, using db fallback", err);
            setAllPositions(dbPositions); // fallback to db constants
        } finally {
            setLoading(false);
        }
      });
  }, []);

  if (loading) {
     return <div style={{padding: "40px", textAlign: "center", color:"#888"}}>Loading live position data...</div>;
  }

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP (Live)</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;

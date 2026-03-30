import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Fetch user's holdings from MongoDB
    axios.get("http://localhost:3002/allHoldings")
      .then(async (res) => {
        const dbHoldings = res.data;
        if (dbHoldings.length === 0) {
            setLoading(false);
            return;
        }

        // 2. Extract instrument names, append '.NS' to get India live stock data
        const symbolsStr = dbHoldings.map(item => `${item.name}.NS`).join(',');

        try {
            // 3. Fetch live data for these specific holdings
            const liveDataRes = await axios.get(`http://localhost:3002/stock?symbols=${symbolsStr}`);
            const liveData = liveDataRes.data;

            // 4. Merge live prices into the DB holdings
            const mergedHoldings = dbHoldings.map((dbItem) => {
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

            setAllHoldings(mergedHoldings);
        } catch (err) {
            console.error("Failed to fetch live prices for holdings, using db fallback", err);
            setAllHoldings(dbHoldings); // fallback to db constants
        } finally {
            setLoading(false);
        }
      });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Live Stock Price (LTP)",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  if (loading) {
     return <div style={{padding: "40px", textAlign: "center", color:"#888"}}>Loading live holdings data...</div>;
  }

  // Calculate totals
  let totalInvestment = 0;
  let totalCurrentValue = 0;
  
  allHoldings.forEach(stock => {
      totalInvestment += stock.avg * stock.qty;
      totalCurrentValue += stock.price * stock.qty;
  });

  const totalPL = totalCurrentValue - totalInvestment;
  const totalPLPercent = totalInvestment > 0 ? (totalPL / totalInvestment) * 100 : 0;
  const totalPLClass = totalPL >= 0 ? "profit" : "loss";

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP (Live)</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {totalCurrentValue.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={totalPLClass}>
             {totalPL.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ({totalPL > 0 ? "+" : ""}{totalPLPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
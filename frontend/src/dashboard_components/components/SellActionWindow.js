import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [availableQty, setAvailableQty] = useState(0);
  const [error, setError] = useState("");
  
  const generalContext = useContext(GeneralContext);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await axios.get("http://localhost:3002/allHoldings");
        const holding = res.data.find((item) => item.name === uid);
        if (holding) {
          setAvailableQty(holding.qty);
        } else {
          const posRes = await axios.get("http://localhost:3002/allPositions");
          const position = posRes.data.find((item) => item.name === uid);
          if (position) {
            setAvailableQty(position.qty);
          }
        }
      } catch (err) {
        console.error("Error fetching availability:", err);
      }
    };
    fetchHoldings();
  }, [uid]);

  const handleSellClick = () => {
    if (stockQuantity > availableQty) {
      setError(`Insufficient quantity. Available: ${availableQty}`);
      return;
    }

    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    }).then(() => {
        generalContext.closeSellWindow();
    });
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => {
                setStockQuantity(Number(e.target.value));
                setError("");
              }}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
        {error && <span className="error">{error}</span>}
        <p style={{fontSize: "0.8rem", color: "#666", marginTop: "10px"}}>
          Available to sell: <strong>{availableQty}</strong>
        </p>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;

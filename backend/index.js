require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Route Imports
const authRoute = require("./Routes/AuthRoute");
const stockRoute = require("./Routes/StockRoute");

// Model Imports
const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');

const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URL;

// Middelwares
app.use(
    cors({
        origin: ["http://localhost:3000", "http://localhost:3001"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.json());

// Auth & Stock Routes
app.use("/", authRoute);
app.use("/stock", stockRoute);

// Holdings & Positions Data Routes
app.get('/allHoldings', async (req, res) => {
    try {
        const allHoldings = await HoldingsModel.find({});
        res.status(200).json(allHoldings);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch holdings" });
    }
});

app.get('/allPositions', async (req, res) => {
    try {
        const allPositions = await PositionsModel.find({});
        res.status(200).json(allPositions);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch positions" });
    }
});

app.post("/newOrder", async (req, res) => {
    try {
        const newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        });
        await newOrder.save();
        res.status(201).send("Order Saved!");
    } catch (err) {
        res.status(500).json({ error: "Failed to save order" });
    }
});

// Server Initialization
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.error("Database connection failed:", err);
    }
});
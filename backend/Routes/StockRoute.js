const YahooFinance = require('yahoo-finance2').default;
const yahooFinance = new YahooFinance({ suppressNotices: ['yahooSurvey'] });

const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        const symbolsStr = req.query.symbols;
        if (!symbolsStr) {
            return res.status(400).json({ message: "No symbols provided" });
        }

        const symbols = symbolsStr.split(",");
        const results = await yahooFinance.quote(symbols);
        
        const formattedData = (Array.isArray(results) ? results : [results]).map(result => ({
            symbol: result.symbol,
            name: (result.symbol || "").replace('.NS', '').replace('.BO', ''), // Clean up ticker
            price: result.regularMarketPrice || 0,
            percent: (result.regularMarketChangePercent || 0).toFixed(2) + "%",
            net: (result.regularMarketChangePercent || 0).toFixed(2) + "%", // for Holdings
            day: (result.regularMarketChangePercent || 0).toFixed(2) + "%", // for Holdings
            isDown: result.regularMarketChange < 0,
            isLoss: result.regularMarketChange < 0 // for Holdings
        }));

        res.json(formattedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching stock data" });
    }
});

module.exports = router;

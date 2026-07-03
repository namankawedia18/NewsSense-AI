const express = require("express");
const cors = require("cors");

const newsRoutes = require("./routes/newsRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("NewsSense AI Backend is Running 🚀");
});

app.use("/api/news", newsRoutes);

module.exports = app;
const express = require("express");

const router = express.Router();

const {
    getTopHeadlines,
} = require("../controllers/newsController");

router.get("/", getTopHeadlines);

module.exports = router;
const { fetchTopHeadlines } = require("../services/newsService");

const getTopHeadlines = async (req, res) => {
    try {
        const articles = await fetchTopHeadlines();

        res.status(200).json({
            success: true,
            articles,
        });
    } catch (error) {
        console.error(error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch news",
        });
    }
};

module.exports = {
    getTopHeadlines,
};
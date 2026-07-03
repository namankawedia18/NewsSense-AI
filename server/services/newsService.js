const axios = require("axios");

const fetchTopHeadlines = async () => {
    try {
        const response = await axios.get(
            "https://newsapi.org/v2/top-headlines",
            {
                params: {
                    country: "us",
                    pageSize: 12,
                    apiKey: process.env.NEWS_API_KEY,
                },
            }
        );

        return response.data.articles;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    fetchTopHeadlines,
};
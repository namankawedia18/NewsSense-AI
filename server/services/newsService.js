const axios = require("axios");

const fetchTopHeadlines = async () => {
    try {
        const response = await axios.get(
            "https://gnews.io/api/v4/top-headlines",
            {
                params: {
                    lang: "en",
                    country: "in",
                    max: 12,
                    apikey: process.env.GNEWS_API_KEY,
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
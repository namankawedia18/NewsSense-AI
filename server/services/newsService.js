const axios = require("axios");

const BASE_URL = "https://gnews.io/api/v4";

const fetchNews = async (query = "") => {
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: {
                apikey: process.env.GNEWS_API_KEY,
                lang: "en",
                max: 12,
                q: query.trim() || "India",
            },
        });

        return response.data.articles;
    } catch (error) {
        console.error(error.response?.data || error.message);
        throw error;
    }
};

module.exports = {
    fetchNews,
};
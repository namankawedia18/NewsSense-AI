const axios = require("axios");

const BASE_URL = "https://gnews.io/api/v4";

const fetchNews = async (query = "") => {
    try {
        const endpoint = query ? "/search" : "/top-headlines";

        const params = {
            apikey: process.env.GNEWS_API_KEY,
            lang: "en",
            country: "in",
            max: 12,
        };

        if (query) {
            params.q = query;
            delete params.country; // GNews search doesn't support country
        }

        const response = await axios.get(`${BASE_URL}${endpoint}`, {
            params,
        });

        return response.data.articles;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    fetchNews,
};
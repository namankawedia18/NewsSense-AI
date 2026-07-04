import axios from "axios";

const API = "http://localhost:5000/api/news";

export const fetchNews = async (query = "") => {
    const response = await axios.get(API, {
        params: {
            query,
        },
    });

    return response.data.articles;
};
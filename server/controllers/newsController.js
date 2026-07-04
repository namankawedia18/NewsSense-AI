
const { fetchNews } = require("../services/newsService");

const getNews = async (req, res) => {
    try {
        const query = req.query.query || "";
        
        const articles = await fetchNews(query);
        
        const formattedArticles = articles.map((article, index) => ({
            id: index + 1,
            title: article.title,
            description:
            article.description || "No description available.",
            image:
            article.image ||
            "https://placehold.co/600x400?text=NewsSense+AI",
            source: article.source.name,
            publishedAt: article.publishedAt,
            url: article.url,
        }));
        
        res.status(200).json({
            success: true,
            articles: formattedArticles,
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
    getNews,
};

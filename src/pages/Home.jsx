import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryBar from "../components/CategoryBar";
import NewsCard from "../components/NewsCard";
import NewsCardSkeleton from "../components/NewsCardSkeleton";

import { fetchNews } from "../services/newsApi";

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const loadNews = async (query = "") => {
    try {
      setLoading(true);
      setSearchQuery(query);

      const news = await fetchNews(query);
      setArticles(news || []);
    } catch (error) {
      console.error("Error fetching news:", error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <>
      <Navbar />
      <Hero onSearch={loadNews} loading={loading} />
      <CategoryBar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Latest News
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <NewsCardSkeleton key={index} />
            ))}
          </div>
        ) : articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-6xl mb-4">🔍</div>

            <h2 className="text-3xl font-bold text-gray-800">
              No Results Found
            </h2>

            {searchQuery ? (
              <>
                <p className="text-gray-600 mt-4">
                  We couldn't find any news for
                </p>

                <p className="text-blue-600 font-semibold text-lg mt-2">
                  "{searchQuery}"
                </p>

                <p className="text-gray-500 mt-4">
                  Try another keyword.
                </p>
              </>
            ) : (
              <p className="text-gray-500 mt-4">
                No news is available at the moment.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
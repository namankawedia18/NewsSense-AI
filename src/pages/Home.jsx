import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryBar from "../components/CategoryBar";
import NewsCard from "../components/NewsCard";

import dummyNews from "../services/dummyNews";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryBar />

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-8">
          Latest News
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyNews.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
            />
          ))}
        </div>

      </div>

    </>
  );
}

export default Home;
import { useState } from "react";
import {
  FiSearch,
  FiGlobe,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

function Hero({ onSearch, loading }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  const trendingTopics = [
    "AI",
    "Technology",
    "Business",
    "Sports",
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <h1 className="text-6xl font-extrabold leading-tight text-gray-900">

            Your
            <span className="text-blue-600"> AI-Powered</span>

            <br />

            News Intelligence Hub

          </h1>

          <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-8">

            Discover breaking news from trusted sources,
            search instantly, and experience the future of
            intelligent news consumption.

          </p>

        </div>

        {/* Search */}

        <div className="mt-12 max-w-4xl mx-auto">

          <div className="bg-white rounded-2xl shadow-xl p-3 flex flex-col md:flex-row gap-3">

            <div className="flex-1 flex items-center px-4">

              <FiSearch
                className="text-gray-400 mr-3"
                size={22}
              />

              <input
                type="text"
                placeholder="Search the latest news..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full outline-none text-lg"
              />

            </div>

            <button
              onClick={handleSearch}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl transition disabled:bg-gray-400"
            >
              {loading ? "Searching..." : "Search"}
            </button>

          </div>

        </div>

        {/* Trending */}

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {trendingTopics.map((topic) => (
            <button
              key={topic}
              onClick={() => {
                setQuery(topic);
                onSearch(topic);
              }}
              className="px-5 py-2 rounded-full bg-white border border-gray-200 hover:bg-blue-600 hover:text-white transition shadow-sm"
            >
              🔥 {topic}
            </button>
          ))}

        </div>

        {/* Stats */}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">

            <FiTrendingUp
              size={30}
              className="mx-auto text-blue-600"
            />

            <h3 className="text-2xl font-bold mt-4">
              Live News
            </h3>

            <p className="text-gray-600 mt-2">
              Breaking stories updated in real time.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">

            <FiGlobe
              size={30}
              className="mx-auto text-blue-600"
            />

            <h3 className="text-2xl font-bold mt-4">
              Global Coverage
            </h3>

            <p className="text-gray-600 mt-2">
              News from trusted international sources.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">

            <FiZap
              size={30}
              className="mx-auto text-blue-600"
            />

            <h3 className="text-2xl font-bold mt-4">
              AI Ready
            </h3>

            <p className="text-gray-600 mt-2">
              Summaries, sentiment and recommendations coming soon.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
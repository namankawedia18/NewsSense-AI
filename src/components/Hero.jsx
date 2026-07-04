import { useState } from "react";

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

    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-5xl mx-auto text-center px-6">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                    Stay Informed with
                    <span className="text-blue-600"> AI-Powered News</span>
                </h1>

                <p className="mt-6 text-lg text-gray-600">
                    Read the latest news from trusted sources, analyze sentiment, and
                    discover stories that matter to you.
                </p>

                <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search news..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full md:w-2/3 px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        onClick={handleSearch}
                        disabled={loading}
                        className="bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {loading ? "Searching..." : "Search"}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
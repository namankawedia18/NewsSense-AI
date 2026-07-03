function Hero() {
    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-5xl mx-auto text-center px-6">

                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                    Stay Informed with
                    <span className="text-blue-600"> AI-Powered News</span>
                </h1>

                <p className="mt-6 text-lg text-gray-600">
                    Read the latest news from trusted sources,
                    analyze sentiment, and discover stories that matter to you.
                </p>

                <div className="mt-10">
                    <input
                        type="text"
                        placeholder="Search news..."
                        className="w-full md:w-2/3 px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mt-6">
                    <button
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Explore Latest News
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Hero;
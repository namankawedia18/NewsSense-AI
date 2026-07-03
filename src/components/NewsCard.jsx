function NewsCard({ article }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

            <img
                src={article.image}
                alt={article.title}
                className="w-full h-52 object-cover"
            />

            <div className="p-5">

                <span className="inline-block bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                    {article.category}
                </span>

                <h2 className="text-xl font-bold mt-4">
                    {article.title}
                </h2>

                <p className="text-gray-600 mt-3">
                    {article.description}
                </p>

                <a
                    href="#"
                    className="mt-5 inline-block text-blue-600 font-semibold hover:underline"
                >
                    Read More →
                </a>

            </div>

        </div>
    );
}

export default NewsCard;
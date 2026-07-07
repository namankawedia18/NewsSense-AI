function FeaturedNews({ article }) {

    if (!article) return null;

    return (

        <section className="max-w-7xl mx-auto px-6 mt-16">

            <h2 className="text-3xl font-bold mb-8">

                ⭐ Featured Story

            </h2>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">

                <div className="grid lg:grid-cols-2">

                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover min-h-[420px]"
                    />

                    <div className="p-10 flex flex-col justify-center">

                        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium w-fit">

                            {article.source}

                        </span>

                        <h1 className="text-5xl font-bold mt-6 leading-tight">

                            {article.title}

                        </h1>

                        <p className="text-gray-600 mt-6 text-lg leading-8">

                            {article.description}

                        </p>

                        <a
                            href={article.url}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-10 text-blue-600 font-semibold text-lg hover:underline"
                        >

                            Read Full Article →

                        </a>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default FeaturedNews;
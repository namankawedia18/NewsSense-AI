import { formatDistanceToNow } from "date-fns";
import { FiArrowRight } from "react-icons/fi";

function NewsCard({ article }) {
  const publishedTime = formatDistanceToNow(
    new Date(article.publishedAt),
    {
      addSuffix: true,
    }
  );

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noreferrer"
      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}

      <div className="p-6">
        {/* Top Row */}

        <div className="flex justify-between items-center text-sm mb-4">

          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
            {article.source}
          </span>

          <span className="text-gray-500">
            {publishedTime}
          </span>

        </div>

        {/* Title */}

        <h2 className="text-xl font-bold leading-7 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h2>

        {/* Description */}

        <p className="text-gray-600 mt-4 line-clamp-3 leading-7">
          {article.description}
        </p>

        {/* Footer */}

        <div className="mt-8 flex items-center text-blue-600 font-semibold">

          Read Article

          <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />

        </div>
      </div>
    </a>
  );
}

export default NewsCard;
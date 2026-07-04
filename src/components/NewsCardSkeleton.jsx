function NewsCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-52 bg-gray-300"></div>

      <div className="p-5">
        <div className="w-24 h-6 bg-gray-300 rounded-full"></div>

        <div className="mt-4 h-6 bg-gray-300 rounded w-3/4"></div>

        <div className="mt-3 h-4 bg-gray-300 rounded"></div>
        <div className="mt-2 h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="mt-2 h-4 bg-gray-300 rounded w-2/3"></div>

        <div className="mt-5 h-5 bg-gray-300 rounded w-28"></div>
      </div>
    </div>
  );
}

export default NewsCardSkeleton;
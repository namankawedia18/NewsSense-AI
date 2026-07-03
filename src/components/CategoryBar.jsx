const categories = [
  "Technology",
  "Business",
  "Sports",
  "Health",
  "Science",
  "Entertainment",
];

function CategoryBar() {
  return (
    <div className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 px-6">
        {categories.map((category) => (
          <button
            key={category}
            className="px-5 py-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryBar;
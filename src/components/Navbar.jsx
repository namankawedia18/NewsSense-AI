function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          AI News Sense
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Categories
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Trending
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
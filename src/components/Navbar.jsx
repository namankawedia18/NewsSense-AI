import {
  FiSearch,
  FiMoon,
  FiUser,
} from "react-icons/fi";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-3 cursor-pointer">

          <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-md">

            📰

          </div>

          <div>

            <h1 className="text-2xl font-bold tracking-tight">
              NewsSense
              <span className="text-blue-600"> AI</span>
            </h1>

            <p className="text-xs text-gray-500">
              AI Powered News Intelligence
            </p>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <button className="w-11 h-11 rounded-full hover:bg-gray-100 transition flex items-center justify-center">

            <FiSearch size={20} />

          </button>

          <button className="w-11 h-11 rounded-full hover:bg-gray-100 transition flex items-center justify-center">

            <FiMoon size={20} />

          </button>

          <button className="w-11 h-11 rounded-full hover:bg-blue-600 hover:text-white transition flex items-center justify-center">

            <FiUser size={20} />

          </button>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;
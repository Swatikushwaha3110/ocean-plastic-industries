import {
  FaRegHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa";

const MainHeader = () => {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold uppercase text-[#0B4F9C] leading-none">
                OCEAN PLASTIC
              </h1>

              <p className="text-base sm:text-lg font-bold uppercase text-[#73B62C] mt-1">
                INDUSTRIES
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex w-full lg:max-w-[650px]">

            <select className="hidden md:block w-44 border border-r-0 border-gray-300 px-3 text-sm outline-none rounded-l-md">
              <option>All Categories</option>
            </select>

            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 h-12 border border-gray-300 px-4 outline-none text-sm md:border-l-0"
            />

            <button className="w-14 h-12 bg-[#73B62C] hover:bg-[#5d9725] text-white flex items-center justify-center rounded-r-md transition">
              <FaSearch />
            </button>

          </div>

          {/* Right Icons */}
          <div className="flex justify-center lg:justify-end items-center gap-6 sm:gap-8">

            {/* Wishlist */}
            <div className="flex flex-col items-center cursor-pointer group">
              <FaRegHeart className="text-xl sm:text-2xl text-gray-700 group-hover:text-[#73B62C] transition" />

              <span className="hidden sm:block text-xs mt-1">
                Wishlist
              </span>
            </div>

            {/* Cart */}
            <div className="relative flex flex-col items-center cursor-pointer group">

              <FaShoppingCart className="text-xl sm:text-2xl text-gray-700 group-hover:text-[#73B62C] transition" />

              <span className="absolute -top-1 -right-2 bg-[#73B62C] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>

              <span className="hidden sm:block text-xs mt-1">
                Cart
              </span>

            </div>

            {/* Login */}
            <div className="flex flex-col items-center cursor-pointer group">

              <FaUser className="text-xl sm:text-2xl text-gray-700 group-hover:text-[#73B62C] transition" />

              <span className="hidden sm:block text-xs mt-1 text-center leading-4">
                Login / <br />
                Register
              </span>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
};

export default MainHeader;
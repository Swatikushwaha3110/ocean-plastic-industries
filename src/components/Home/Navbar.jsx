import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", active: true },
    { name: "Products", dropdown: true },
    { name: "Categories", dropdown: true },
    { name: "Bulk Order" },
    { name: "Industries", dropdown: true },
    { name: "About Us" },
    { name: "Blog" },
    { name: "Contact Us" },
  ];

  return (
    <nav className="bg-[#0B4F9C] text-white relative">
      <div className="max-w-7xl mx-auto px-4">

        {/* Desktop Navbar */}
        <div className="hidden lg:flex h-14 items-center">

          <ul className="flex items-center text-sm font-medium uppercase">

            {navLinks.map((item, index) => (
              <li
                key={index}
                className={`${
                  item.active
                    ? "bg-[#73B62C]"
                    : "hover:text-[#73B62C]"
                } px-5 h-14 flex items-center cursor-pointer transition`}
              >
                <span className="flex items-center gap-2">
                  {item.name}
                  {item.dropdown && <FaChevronDown className="text-xs" />}
                </span>
              </li>
            ))}

          </ul>

        </div>

        {/* Mobile Navbar */}
        <div className="flex lg:hidden h-14 items-center justify-between">

          <h2 className="font-semibold uppercase">
            Menu
          </h2>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-[#0B4F9C] border-t border-blue-700">

          {navLinks.map((item, index) => (
            <div
              key={index}
              className={`${
                item.active ? "bg-[#73B62C]" : ""
              } flex items-center justify-between px-5 py-4 border-b border-blue-700 cursor-pointer hover:bg-[#73B62C] transition`}
            >
              <span>{item.name}</span>

              {item.dropdown && <FaChevronDown className="text-xs" />}
            </div>
          ))}

        </div>
      )}
    </nav>
  );
};

export default Navbar;
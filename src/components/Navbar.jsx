import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Search,
  Home,
  Music,
  Disc,
  Users,
  Menu,
  X,
  Bird,
  Swords,
  Compass,
} from "lucide-react";
import AudioButton from "./AudioButton.jsx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#242d59] text-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#FF9933] text-2xl font-bold"
        >
          <img
            src="/imgs/logo.png"
            alt="DivyaKatha Logo"
            className="w-10 h-10"
          />
          DivyaKatha
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-2 font-small transition ${
                isActive ? "text-[#FF9933]" : "text-white"
              } hover:text-[#ffd7a4]`
            }
          >
            <Home size={18} />
            <span>HOME</span>
          </NavLink>

          <NavLink
            to="/satyayuga"
            className={({ isActive }) =>
              `flex items-center space-x-2 font-small transition ${
                isActive ? "text-[#FF9933]" : "text-white"
              } hover:text-[#ffd7a4]`
            }
          >
            <Bird size={18} />
            <span>SATYAYUGA</span>
          </NavLink>

          <NavLink
            to="/dvaparayuga"
            className={({ isActive }) =>
              `flex items-center space-x-2 font-small transition ${
                isActive ? "text-[#FF9933]" : "text-white"
              } hover:text-[#ffd7a4]`
            }
          >
            <Disc size={18} />
            <span>DVAPARAYUGA</span>
          </NavLink>

          <NavLink
            to="/tretayuga"
            className={({ isActive }) =>
              `flex items-center space-x-2 font-small transition ${
                isActive ? "text-[#FF9933]" : "text-white"
              } hover:text-[#ffd7a4]`
            }
          >
            <Swords size={18} />
            <span> TRETAYUGA</span>
          </NavLink>
          <NavLink
            to="/kaliyuga"
            className={({ isActive }) =>
              `flex items-center space-x-2 font-small transition ${
                isActive ? "text-[#FF9933]" : "text-white"
              } hover:text-[#ffd7a4]`
            }
          >
            <Compass size={18} />
            <span>KALIYUGA</span>
          </NavLink>
        </nav>

        <div className=" md:flex ml-20">
          <AudioButton />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cyan-300 ml-4 mr-[13rem]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-[5rem] bg-[#242d59] px-4 py-3 text-right rounded-lg shadow-lg w-30 space-y-2"
          style={{ right: "210px" }}
        >
          <Link to="/" className="block text-white hover:text-[#ffd7a4]">
            HOME
          </Link>
          <hr className="border-gray-500" />
          <Link
            to="/satyayuga"
            className="block text-white hover:text-[#ffd7a4]"
          >
            SATYAYUGA
          </Link>
          <hr className="border-gray-500" />
          <Link
            to="/dvaparayuga"
            className="block text-white hover:text-[#ffd7a4]"
          >
            DVAPARAYUGA
          </Link>
          <hr className="border-gray-500" />
          <Link
            to="/tretayuga"
            className="block text-white hover:text-[#ffd7a4]"
          >
            TREATAYUG
          </Link>
          <hr className="border-gray-500" />
          <Link
            to="/kaliyuga"
            className="block text-white hover:text-[#ffd7a4]"
          >
            KALIYUGA
          </Link>
          <hr className="border-gray-500" />
        </div>
      )}
    </header>
  );
};

export default Navbar;

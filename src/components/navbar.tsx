import { Link, useLocation } from "@tanstack/react-router";
import LogoIcon from "@/assets/shared/logo.svg";
import MenuIcon from "@/assets/shared/icon-hamburger.svg";
import MenuCloseIcon from "@/assets/shared/icon-close.svg";
import { useState } from "react";
export const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center p-2 md:py-4 z-10 relative">
      <Link to={"/"} className="with-beam">
        <img src={LogoIcon} alt="space tourism logo" />
      </Link>
      <ul
        className={`hidden sm:flex sm:gap-8 px-2 sm:px-6 sm:to-transparent sm:from-transparent md:px-24  items-center ${location.pathname === "/" ? "md:bg-gradient-to-r md:from-[#d0d6f9] md:to-slate-[#0b0d17]" : "bg-white/5"} another-font transition-colors`}
      >
        <li>
          <Link
            to={"/"}
            className="flex gap-2 text-white items-center sm:text-2xl text-sm [&.active]:border-l-white [&.active]:border-l sm:[&.active]:border-b-white sm:[&.active]:border-b sm:[&.active]:border-l-transparent py-3 md:py-8"
          >
            <strong className=" font-bold">00</strong>
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/destination"}
            className="flex gap-2 sm:text-2xl text-sm text-white items-center [&.active]:border-l-white [&.active]:border-l sm:[&.active]:border-b-white sm:[&.active]:border-b sm:[&.active]:border-l-transparent py-3 md:py-8"
          >
            <strong className=" font-bold">01</strong>
            <span>Destination</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/crew"}
            className="flex gap-2 sm:text-2xl text-sm text-white items-center [&.active]:border-l-white [&.active]:border-l sm:[&.active]:border-b-white sm:[&.active]:border-b sm:[&.active]:border-l-transparent py-3 md:py-8"
          >
            <strong className=" font-bold">02</strong>
            <span>Crew</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/technology"}
            className="flex gap-2 sm:text-2xl text-sm text-white items-center [&.active]:border-l-white [&.active]:border-l sm:[&.active]:border-b-white sm:[&.active]:border-b sm:[&.active]:border-l-transparent py-3 md:py-8"
          >
            <strong className=" font-bold">03</strong>
            <span>Technology</span>
          </Link>
        </li>
      </ul>
      <button
        className="sm:hidden"
        onClick={() => setMenuIsOpen((prev) => !prev)}
      >
        <img src={menuIsOpen ? MenuCloseIcon : MenuIcon} alt="menu icon" />
      </button>
      {menuIsOpen && (
        <ul className="sm:hidden fixed top-16 right-0 z-10 max-w-60 w-full bg-gradient-to-t from-slate-400 to-transparent h-screen space-y-8">
          <li>
            <Link
              to={"/"}
              className="flex gap-2 text-white items-center [&.active]:border-l-white [&.active]:border-l-2 py-3 pl-3"
            >
              <strong>00</strong>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/destination"}
              className="flex gap-2 text-white items-center [&.active]:border-l-white [&.active]:border-l-2 py-3 pl-3"
            >
              <strong>01</strong>
              <span>Destination</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/crew"}
              className="flex gap-2 text-white items-center [&.active]:border-l-white [&.active]:border-l-2 py-3 pl-3"
            >
              <strong>02</strong>
              <span>Crew</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/technology"}
              className="flex gap-2 text-white items-center [&.active]:border-l-white [&.active]:border-l-2 py-3 pl-3"
            >
              <strong>03</strong>
              <span>Technology</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

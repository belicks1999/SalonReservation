import { useState } from "react";
import logo from "../assets/images/logo.png"

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="mb-5 border-b border-white text-lg flex items-center justify-between  px-10 py-5 lg:px-40 bg-black bg-opacity-90  text-white">
      <a href="/">
        <img className="w-20 lg:w-24 " src={logo} alt="logo" />
      </a>
      <nav>
        {/* Mobile Menu */}
        <section className="mobile-menu flex lg:hidden bg-black ">
          <div
            className="hamburger-icon space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div>

          <div className={isNavOpen ? "show-menu-nav " : "hide-menu-nav"} >
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase hover:text-orange-500">
                <a href="/about">Home</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase hover:text-orange-500">
                <a href="/portfolio">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase hover:text-orange-500">
                <a href="/contact">Services</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase hover:text-orange-500">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        {/* Desktop Menu */}
        <ul className="desktop-menu hidden gap-8 lg:flex ">
          <li>
            <a href="/about" className="hover:text-orange-500 ">Home</a>
          </li>
          <li>
            <a href="/portfolio" className="hover:text-orange-500  ">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-orange-500  ">Services</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-orange-500  ">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
        .hide-menu-nav {
          display: none;
        }
        .show-menu-nav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: black;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

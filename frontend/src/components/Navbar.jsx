import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="mb-5 border-b border-white text-lg flex items-center justify-between px-10 py-5 lg:px-40 bg-black bg-opacity-90 text-white">
      <a href="/" onClick={scroll.scrollToTop}>
        <img className="w-20 lg:w-24" src={logo} alt="logo" />
      </a>
      <nav>
        {/* Mobile Menu */}
        <section className="mobile-menu flex lg:hidden bg-black">
          <div className="hamburger-icon space-y-2" onClick={toggleNav}>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div>

          <div className={isNavOpen ? "show-menu-nav" : "hide-menu-nav"}>
            <div className="absolute top-0 right-0 px-8 py-8" onClick={closeNav}>
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
                <Link to="home" smooth={true} duration={500} onClick={closeNav} style={{ cursor: "pointer" }}>
                  Home
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase hover:text-orange-500">
                <Link to="about" smooth={true} duration={500} onClick={closeNav} style={{ cursor: "pointer" }}>
                  About
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase hover:text-orange-500">
                <Link to="services" smooth={true} duration={500} onClick={closeNav} style={{ cursor: "pointer" }}>
                  Services
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase hover:text-orange-500">
                <Link to="review" smooth={true} duration={500} onClick={closeNav} style={{ cursor: "pointer" }}>
                  Reviews
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase hover:text-orange-500">
                <Link to="contact" smooth={true} duration={500} onClick={closeNav} style={{ cursor: "pointer" }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Desktop Menu */}
        <ul className="desktop-menu hidden gap-8 lg:flex">
          <li className="relative group">
            <Link to="hero" smooth={true} duration={500} style={{ cursor: "pointer" }}>
              Home
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-out"></span>
          </li>
          <li className="relative group">
            <Link to="about" smooth={true} duration={500} style={{ cursor: "pointer" }}>
              About
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-out"></span>
          </li>
          <li className="relative group">
            <Link to="services" smooth={true} duration={500} style={{ cursor: "pointer" }}>
              Services
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-out"></span>
          </li>
          <li className="relative group">
            <Link to="review" smooth={true} duration={500} style={{ cursor: "pointer" }}>
              Reviews
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-out"></span>
          </li>
          <li className="relative group">
            <Link to="contact" smooth={true} duration={500} style={{ cursor: "pointer" }}>
              Contact
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-300 ease-out"></span>
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

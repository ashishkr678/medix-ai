import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpg";
import brand_logo from "../assets/brand-logo.png";
import AuthModal from "../auth/AuthModal";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalType, setAuthModalType] = useState("login");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!toggle) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, toggle]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
        setIsVisible(true);
      }
    };

    const handleTouchMove = (event) => {
      if (menuRef.current && menuRef.current.contains(event.target)) {
        event.preventDefault();
      }
    };

    if (toggle) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
      document.removeEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
      document.removeEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    };
  }, [toggle]);

  useEffect(() => {
    const handleBodyClick = (event) => {
      if (!event.target.closest("button") && !event.target.closest("a")) {
        setIsVisible(true);
      }
    };

    document.addEventListener("click", handleBodyClick);

    return () => {
      document.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const handleMouseEnter = (dropdownSetter) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    dropdownSetter(true);
  };

  const handleMouseLeave = (dropdownSetter) => {
    timeoutRef.current = setTimeout(() => {
      dropdownSetter(false);
    }, 100);
  };

  const toggleMenu = () => {
    setToggle(!toggle);
    setIsToolsDropdownOpen(false);
    setIsSupportDropdownOpen(false);
    setIsVisible(true);
  };

  const openAuthModal = (type) => {
    setAuthModalType(type);
    setIsAuthModalOpen(true);
  };

  return (
    <div>
      <header
        className={`bg-gray-900 text-white fixed top-0 w-full z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-2 py-2">
          <div className="flex items-center space-x-4 flex-grow">
            <Link to="/">
              <aside className="flex items-center">
                <img
                  src={brand_logo}
                  alt="logo"
                  className="w-12 h-4 md:w-22 md:h-6 lg:w-32 lg:h-8 rounded-2xl"
                />
              </aside>
            </Link>
            <div className="relative hidden md:flex flex-grow">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 pl-10 rounded-3xl w-full bg-white text-black focus:outline-none"
              />
              <FaSearch
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={20}
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center justify-end space-x-5 flex-grow">
            <Link
              to="/"
              className="font-semibold text-white hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              to="/"
              className="font-semibold text-white hover:text-gray-300"
            >
              AI & ML
            </Link>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter(setIsToolsDropdownOpen)}
              onMouseLeave={() => handleMouseLeave(setIsToolsDropdownOpen)}
            >
              <button className="font-semibold text-white hover:text-gray-300">
                Tools
              </button>
              {isToolsDropdownOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-44 bg-gray-900 text-white rounded shadow-lg">
                  <Link
                    to="/analysis-tools"
                    className="block px-2 py-2 text-ellipsis overflow-hidden whitespace-nowrap hover:bg-gray-800"
                  >
                    Analysis Tools
                  </Link>
                  <Link
                    to="/"
                    className="block px-2 py-2 text-ellipsis overflow-hidden whitespace-nowrap hover:bg-gray-800"
                  >
                    Visualization Tools
                  </Link>
                  <Link
                    to="/"
                    className="block px-2 py-2 text-ellipsis overflow-hidden whitespace-nowrap hover:bg-gray-800"
                  >
                    Virtual Simulation
                  </Link>
                  <Link
                    to="/"
                    className="block px-2 py-2 text-ellipsis overflow-hidden whitespace-nowrap hover:bg-gray-800"
                  >
                    Data Management
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/"
              className="font-semibold text-white hover:text-gray-300"
            >
              About
            </Link>
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter(setIsSupportDropdownOpen)}
              onMouseLeave={() => handleMouseLeave(setIsSupportDropdownOpen)}
            >
              <button className="font-semibold text-white hover:text-gray-300">
                Support
              </button>
              {isSupportDropdownOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-28 bg-gray-900 text-white rounded shadow-lg">
                  <Link
                    to="/"
                    className="block px-2 py-2 text-ellipsis overflow-hidden whitespace-nowrap hover:bg-gray-800"
                  >
                    Help Center
                  </Link>
                  <Link
                    to="/"
                    className="block px-2 py-2 text-ellipsis overflow-hidden whitespace-nowrap hover:bg-gray-800"
                  >
                    Community
                  </Link>
                  <Link
                    to="/"
                    className="block px-2 py-2 text-ellipsis overflow-hidden whitespace-nowrap hover:bg-gray-800"
                  >
                    Training
                  </Link>
                </div>
              )}
            </div>
            {isLoggedIn && (
              <Link to="/">
                <button className="font-semibold text-white hover:text-gray-300">
                  Dashboard
                </button>
              </Link>
            )}
            {isLoggedIn ? (
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter(setIsProfileDropdownOpen)}
                onMouseLeave={() => handleMouseLeave(setIsProfileDropdownOpen)}
              >
                <button className="flex items-center space-x-2">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </button>
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-38 bg-gray-900 text-white rounded shadow-lg">
                    <Link
                      to="/profile"
                      className="block px-2 py-2 text-ellipsis overflow-hidden whitespace-nowrap hover:bg-gray-800"
                    >
                      Your Profile
                    </Link>
                    <Link
                      to="/"
                      className="block px-2 py-2 text-ellipsis overflow-hidden whitespace-nowrap hover:bg-gray-800"
                    >
                      Account Settings
                    </Link>
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                      }}
                      className="block w-full text-left px-2 py-2 text-ellipsis overflow-hidden whitespace-nowrap hover:bg-gray-800"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => openAuthModal("login")}
                className="font-semibold text-white hover:text-gray-300"
              >
                Sign In
              </button>
            )}
          </nav>

          {/* Mobile View */}
          <div className="md:hidden flex items-center gap-x-0">
            {!isLoggedIn && (
              <button
                onClick={() => openAuthModal("login")}
                className="hover:underline focus:outline-none mr-4"
              >
                Sign In
              </button>
            )}
            {isLoggedIn && (
              <Link to="/">
                <button className="hover:underline focus:outline-none mr-4">
                  Dashboard
                </button>
              </Link>
            )}
            <button onClick={toggleMenu} className="">
              {toggle ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </header>
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 right-0 w-3/5 h-full bg-gray-800 text-white transform ${
          toggle ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 pt-16 overflow-y-auto`}
      >
        <div className="container mx-auto py-4 px-2 flex flex-col justify-between h-full">
          <div>
            <button onClick={toggleMenu} className="absolute top-4 right-4">
              <FaTimes size={24} />
            </button>
            <nav>
              <Link
                to="/"
                className="block px-2 py-2 hover:bg-gray-900"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/"
                className="block px-2 py-2 hover:bg-gray-900"
                onClick={toggleMenu}
              >
                AI & ML
              </Link>
              <div className="relative">
                <button
                  className="w-full text-left px-2 py-2 hover:bg-gray-900 focus:outline-none"
                  onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
                >
                  Tools
                </button>
                {isToolsDropdownOpen && (
                  <div className="bg-gray-800 text-white rounded shadow-lg pl-2 text-sm">
                    <Link
                      to="/analysis-tools"
                      className="block px-2 py-2 hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      Analysis
                    </Link>
                    <Link
                      to="/"
                      className="block px-2 py-2 hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      Visualization
                    </Link>
                    <Link
                      to="/"
                      className="block px-2 py-2 hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      Simulation
                    </Link>
                    <Link
                      to="/"
                      className="block px-2 py-2 hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      Data Management
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/"
                className="block px-2 py-2 hover:bg-gray-900"
                onClick={toggleMenu}
              >
                About
              </Link>
              <div className="relative">
                <button
                  className="w-full text-left px-2 py-2 hover:bg-gray-900 focus:outline-none"
                  onClick={() =>
                    setIsSupportDropdownOpen(!isSupportDropdownOpen)
                  }
                >
                  Support
                </button>
                {isSupportDropdownOpen && (
                  <div className="bg-gray-800 text-white rounded shadow-lg pl-2 text-sm">
                    <Link
                      to="/"
                      className="block px-2 py-2 hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      Help Center
                    </Link>
                    <Link
                      to="/"
                      className="block px-2 py-2 hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      Community
                    </Link>
                    <Link
                      to="/"
                      className="block px-2 py-2 hover:bg-gray-900"
                      onClick={toggleMenu}
                    >
                      Training
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
          <div className="flex flex-col mt-auto">
            {isLoggedIn && (
              <>
                <Link to="/" className="block px-2 py-2 hover:bg-gray-900">
                  Your Profile
                </Link>
                <Link to="/" className="block px-2 py-2 hover:bg-gray-900">
                  Account Settings
                </Link>
                <Link to="/">
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      toast.success("Logged Out");
                      toggleMenu();
                    }}
                    className="block w-full text-left px-2 py-2 hover:bg-gray-900"
                  >
                    Log Out
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      {isAuthModalOpen && (
        <AuthModal
          isOpen={isAuthModalOpen}
          setIsOpen={setIsAuthModalOpen}
          authModalType={authModalType}
          setAuthModalType={setAuthModalType}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name Section */}
            <div className="flex-shrink-0">
              <button
                className="group"
                onClick={() => {
                  setActive("");
                  window.scrollTo(0, 0);
                }}
              >
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent hover:from-purple-400 hover:to-cyan-400 transition-all duration-300">
                  Papun Mohapatra
                </h1>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setActive(link.title)}
                      className={`${
                        active === link.title
                          ? "text-purple-500"
                          : "text-gray-300"
                      } hover:text-purple-400 px-3 py-2 text-sm font-medium transition-colors duration-300 relative group`}
                    >
                      {link.title}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`${
              isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
          >
            <ul className="pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setActive(link.title);
                      setIsOpen(false);
                    }}
                    className={`${
                      active === link.title
                        ? "text-purple-500 bg-gray-800"
                        : "text-gray-300 hover:bg-gray-800 hover:text-purple-400"
                    } block px-3 py-2 text-base font-medium transition-colors duration-300`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* Add padding to the main content to prevent it from going under the navbar */}
      <div className="h-[72px]" />
    </>
  );
};

export default Navbar;

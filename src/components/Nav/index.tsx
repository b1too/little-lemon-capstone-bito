import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { handleOrderClick } from "../Alert";

const navLinks = [
  { href: "/", label: "Home", icon: "mgc_home_1_line" },
  { href: "/booking", label: "Booking", icon: "mgc_calendar_add_line" },
];

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scroll to show/hide button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = (href: string) => {
    navigate(href);
  };

  // Function to check if the link is active
  const isActiveLink = (link: string) => location.pathname === link;

  // Scroll to Top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center">
        <ul className="flex items-center space-x-16 text-lg font-medium tracking-tight">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors hover:text-yellow-500 ${
                  isActiveLink(link.href) ? "text-yellow-500" : "text-dark"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={handleOrderClick}
              className="bg-[#495e57] text-white px-6 py-2 rounded-3xl hover:bg-[#5b6e67] transition-colors"
            >
              Order Online
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`fixed z-20 m-2 bottom-0 left-0 right-0 bg-[#495e57] border-t border-gray-300 lg:hidden flex justify-around items-center p-4 rounded-xl transition-transform duration-500 ease-in-out transform ${
          isMobile ? "translate-y-0 opacity-[95%] backdrop-blur-sm" : "translate-y-full opacity-0"
        }`}
      >
        {[...navLinks, { href: "/order", label: "Order", icon: "mgc_shopping_cart_1_line" }].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`flex flex-col items-center text-white hover:opacity-75 ${
              isActiveLink(link.href) ? "text-primaryYellow" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              if (link.href === "/order") {
                handleOrderClick();
              } else {
                handleNavClick(link.href);
              }
            }}
          >
            <span
              className={`${link.icon} text-4xl ${
                isActiveLink(link.href) ? "text-primaryYellow" : "text-white"
              } drop-shadow-sm cursor-pointer`}
            />
            <span className="hidden sm:block text-sm font-bold">{link.label}</span>
          </a>
        ))}
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed ${isMobile ? "top-4 right-4" : "bottom-6 right-6"} bg-[#f4ce14] text-white p-3 rounded-xl shadow-lg hover:bg-[#ddb013] transition-transform duration-500 ease-in-out z-40 ${
          showScrollTopButton ? "translate-x-0 opacity-100" : "translate-x-[200%]"
        }`}
      >
        <span className="mgc_up_fill text-2xl text-white" />
      </button>
    </>
  );
};

export default Nav;

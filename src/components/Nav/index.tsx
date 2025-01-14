import { useState, useEffect } from "react";

const navLinks = [
  { href: "#", label: "Home", icon: "mgc_home_1_line" },
  { href: "#about", label: "About", icon: "mgc_information_line" },
  { href: "#menu", label: "Menu", icon: "mgc_fork_knife_line" },
  { href: "#booking", label: "Booking", icon: "mgc_calendar_add_line" },
];

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.hash || "#");

  // Detect screen size to toggle mobile or desktop view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update the active link when the hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        <ul className="flex items-center space-x-16 text-lg font-medium tracking-tight">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors hover:text-yellow-500 ${activeLink === link.href ? "text-yellow-500" : "text-dark"
                  }`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/order"
              className="bg-[#495e57] text-white px-6 py-2 rounded-3xl hover:bg-[#5b6e67] transition-colors"
            >
              Order Online
            </a>
          </li>
          <li>
            <span className="mgc_calendar_add_line text-4xl text-yellow-500 drop-shadow-sm cursor-pointer hover:opacity-75" />
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`fixed m-2 bottom-0 left-0 right-0 bg-[#495e57] border-t border-gray-300 lg:hidden flex justify-around items-center p-4 rounded-xl transition-transform duration-500 ease-in-out transform ${isMobile ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
      >
        {[...navLinks, { href: "/order", label: "Order", icon: "mgc_shopping_cart_1_line" }].map(
          (link) => (
            <a
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center text-white hover:opacity-75 ${activeLink === link.href ? "text-primaryYellow" : ""
                }`}
              onClick={() => setActiveLink(link.href)}
            >
              <span
                className={`${link.icon} text-4xl ${activeLink === link.href ? "text-primaryYellow" : "text-white"
                  } drop-shadow-sm cursor-pointer`}
              />
              <span className="hidden sm:block text-sm font-bold">
                {link.label}
              </span>
            </a>

          )
        )}
      </nav>
    </>
  );
};

export default Nav;

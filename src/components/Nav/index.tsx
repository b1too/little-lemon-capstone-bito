const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#menu" className="hover:underline">
            Menu
          </a>
        </li>
        <li>
          <a href="#booking" className="hover:underline">
            Reservations
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

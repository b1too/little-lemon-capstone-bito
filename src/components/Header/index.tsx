import Nav from '../Nav';

const Header = () => {
  return (
    <header className="bg-green-500 text-white p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/assets/logo.png"
          alt="Little Lemon Logo"
          className="w-10 h-10"
        />
        <h1 className="text-2xl font-bold">Little Lemon</h1>
      </div>

      {/* Navigation */}
      <Nav />
    </header>
  );
};

export default Header;

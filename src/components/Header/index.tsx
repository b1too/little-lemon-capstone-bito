import Nav from '../Nav';
import Logo from '../../../public/logo.svg';

const Header = () => {
  return (
    <header className="bg-white text-slate-900 pt-8 pb-16">
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Little Lemon Logo" className="w-40 h-auto" />
        </div>

        {/* Navigation */}
        <Nav />
      </div>
    </header>
  );
};

export default Header;

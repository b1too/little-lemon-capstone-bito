import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Booking from './components/Booking';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <About />
        <Menu />
        <Booking />
        <Footer />

      </main>
    </div>
  );
};

export default App;

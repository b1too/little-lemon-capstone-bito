import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen minfont-sans">
      <Header />
      <div className="flex-grow bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;

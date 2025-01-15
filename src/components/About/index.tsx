import RestaurantLogo from "../../assets/images/restaurantfood.png";

const About = () => {
  return (
    <section className="bg-[#495e57] py-8 relative">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Content Section */}
        <div className="space-y-4 max-w-md text-center md:text-left">
          <h2
            className="text-6xl font-bold text-[#f4ce14]"
            style={{ fontFamily: "Markazi Text, serif" }}
          >
            Little Lemon
          </h2>
          <h3 className="text-2xl font-medium text-white">Chicago</h3>
          <p className="mt-4 text-white font-medium">
            Little Lemon is a family-owned Mediterranean restaurant focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="bg-[#f4ce14] text-white text-xl font-semibold py-3 px-4 rounded-2xl mt-4 hover:bg-[#f4ce14]/90 transition">
            Reserve a Table
          </button>
        </div>

        {/* Image Section */}
        <div className="relative hidden md:flex w-1/3">
          <img
            src={RestaurantLogo}
            alt="Little Lemon Specials"
            className="rounded-2xl shadow-lg w-96 h-72 lg:h-96 object-cover lg:absolute lg:-top-32 lg:right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

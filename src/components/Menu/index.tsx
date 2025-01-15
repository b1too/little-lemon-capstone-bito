import { useState } from "react";
import { menuItems } from "./data";
import { handleOrderClick } from "../Alert";
import Modal from "../Modal";

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <section id="menu" className="max-w-screen-xl mx-auto px-6 py-28 lg:py-40">
      {/* Title and Button */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between mb-5 md:mb-12 gap-6 md:gap-4">
        <h2 className="text-5xl font-bold text-center sm:text-left">
          This week&apos;s specials!
        </h2>
        <button
          className="bg-[#f4ce14] text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-[#ddb013] transition"
          onClick={() => setIsModalOpen(true)}
        >
          View Menu
        </button>
      </div>

      {/* Featured Menu Items (only the first 3) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col justify-between transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <p className="text-gray-700 my-4 flex-grow">{item.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-semibold text-[#f4ce14]">
                  {item.price}
                </span>
                <button onClick={handleOrderClick} className="text-[#495e57] font-medium hover:underline">
                  Order a delivery
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {categories.map((category) => (
          <div key={category} className="mb-8">
            {/* Category Header with Line */}
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-semibold text-[#f4ce14]">{category}</h3>
              <div className="flex-grow h-[1px] bg-[#f4ce14] ml-4"></div>
            </div>

            {/* Menu Items */}
            <ul className="space-y-4">
              {menuItems
                .filter((item) => item.category === category)
                .map((item, index) => (
                  <li
                    key={index}
                    className="pl-4 pb-4 flex items-start justify-between"
                  >
                    <div className="pr-6">
                      <h4 className="text-xl font-medium">{item.name}</h4>
                      <p className="text-gray-700 mt-1">{item.description}</p>
                    </div>
                    <span className="text-lg font-bold text-[#f4ce14] whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </Modal>


    </section>
  );
};

export default Menu;

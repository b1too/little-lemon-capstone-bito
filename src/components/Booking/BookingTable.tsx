import { useState } from "react";
import Swal from "sweetalert2";

const getNextSevenDays = () => {
  const days = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    days.push({
      day: date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.toLocaleDateString("en-GB"),
    });
  }
  return days;
};

const BookingTable = ({
  selectedDay,
  setSelectedDay,
  selectedTable,
  setSelectedTable,
  selectedTime,
  setSelectedTime,
  formData,
  setFormData,
}: {
  selectedDay: string;
  setSelectedDay: (day: string) => void;
  selectedTable: { id: number; label: string; times: string[] } | null;
  setSelectedTable: (table: { id: number; label: string; times: string[] } | null) => void;
  selectedTime: string;
  setSelectedTime: (time: string) => void;
  formData: { email: string; name: string };
  setFormData: (data: { email: string; name: string }) => void;
}) => {
  const [step, setStep] = useState(1);

  const [errors, setErrors] = useState({
    email: false,
    name: false,
  });

  const tables = [
    { id: 1, label: "Table 1", times: ["13:00", "16:00", "19:00"] },
    { id: 2, label: "Table 2", times: ["14:00", "17:00", "20:00"] },
    { id: 3, label: "Table 3", times: ["12:30", "15:30", "18:30"] },
  ];

  const unavailableTimes = ["16:00", "20:00"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const validateForm = () => {
    const newErrors = {
      email: formData.email === "",
      name: formData.name === "",
    };
    setErrors(newErrors);

    return !newErrors.email && !newErrors.name;
  };

  const handleConfirmBooking = () => {
    Swal.fire({
      title: "Booking Confirmed!",
      text: `Your booking has been confirmed for ${selectedDay} at ${selectedTime}.\nPlease check your email for details.`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#f4ce14",
    });

    setStep(1);
    setSelectedDay(getNextSevenDays()[0].date);
    setSelectedTable(null);
    setSelectedTime("");
    setFormData({ email: "", name: "" });
  };

  

  return (
    <div className="max-w-screen-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Booking</h2>

      {step === 1 && (
        <div>
          <h3 className="text-xl mb-4">Step 1: Select a Day, Table, and Time</h3>

          {/* Days Selector */}
          <div className="flex gap-2 overflow-x-auto mb-6">
            {getNextSevenDays().map((day) => (
              <button
                key={day.date}
                onClick={() => {
                  setSelectedDay(day.date);
                  setSelectedTable(null);
                  setSelectedTime("");
                }}
                className={`px-4 py-2 rounded-lg ${
                  selectedDay === day.date ? "bg-[#495e57] hover:bg-[#41544e] transition-colors text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                <div className="text-sm font-bold">{day.day}</div>
                <div className="text-xs">{day.date}</div>
              </button>
            ))}
          </div>

          {/* Tables */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {tables.map((table) => (
              <div
                key={table.id}
                onClick={() => setSelectedTable(table)}
                className={`p-4 border rounded-lg cursor-pointer ${
                  selectedTable?.id === table.id ? "bg-[#495e57] hover:bg-[#41544e] transition-colors text-white" : "bg-gray-100"
                }`}
              >
                <h3 className="text-lg font-bold">{table.label}</h3>
                <p>Seats: 4</p>
              </div>
            ))}
          </div>

          {/* Available Times */}
          {selectedTable && (
            <div>
              <h3 className="text-lg font-bold mb-4">Available Times for {selectedTable.label}</h3>
              <div className="flex justify-between items-center">
                {/* Time Buttons */}
                <div className="flex gap-4">
                  {selectedTable.times.map((time) => (
                    <button
                      key={time}
                      onClick={() =>
                        unavailableTimes.includes(time) ? null : setSelectedTime(time)
                      }
                      className={`px-4 py-2 rounded-lg ${
                        unavailableTimes.includes(time)
                          ? "bg-zinc-300 text-gray-500 cursor-not-allowed"
                          : selectedTime === time
                          ? "bg-[#495e57] hover:bg-[#41544e] transition-colors text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {time}
                      {unavailableTimes.includes(time) && (
                        <span className="ml-2 text-xs text-gray-500">(Reserved)</span>
                      )}
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                {selectedDay && selectedTable && selectedTime && (
                  <button
                    onClick={() => setStep(2)}
                    className="bg-[#f4ce14] hover:bg-[#dbb912] transition-colors text-white px-4 py-2 rounded-lg"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-xl mb-4">Step 2: Enter Your Details</h3>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md mb-4 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md mb-4 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setStep(1)}
              className="bg-[#495e57] hover:bg-[#41544e] transition-colors text-white px-4 py-2 rounded-lg"
            >
              Back
            </button>
            <button
              onClick={() => validateForm() && setStep(3)}
              className="bg-[#f4ce14] hover:bg-[#dbb912] transition-colors text-white px-4 py-2 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-xl mb-4">Step 3: Confirm Your Booking</h3>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setStep(2)}
              className="bg-[#495e57] hover:bg-[#41544e] transition-colors text-white px-4 py-2 rounded-lg"
            >
              Back
            </button>
            <button
              onClick={handleConfirmBooking}
              className="bg-[#f4ce14] hover:bg-[#dbb912] transition-colors text-white px-4 py-2 rounded-lg"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingTable;

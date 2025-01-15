import { useState } from "react";
import BookingTable from "../../components/Booking/BookingTable";
import BookingTicket from "../../components/Booking/BookingTicket";

const Booking = () => {
  const [selectedDay, setSelectedDay] = useState<string>("Today");
  const [selectedTable, setSelectedTable] = useState<{ id: number; label: string; times: string[] } | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState<{ email: string; name: string }>({
    email: "",
    name: "",
  });

  return (
    <div className="max-w-screen-xl mx-auto p-6 flex flex-col lg:flex-row gap-8 items-center">
      {/* Booking Form */}
      <div className="w-full lg:w-2/3">
        <BookingTable
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          selectedTable={selectedTable}
          setSelectedTable={setSelectedTable}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          formData={formData}
          setFormData={setFormData}
        />
      </div>

      {/* Booking Ticket */}
      <div className="w-full lg:w-1/3">
        <BookingTicket
          date={selectedDay}
          table={selectedTable?.label ?? "N/A"}
          time={selectedTime}
          email={formData.email}
          name={formData.name}
        />
      </div>
    </div>
  );
};

export default Booking;

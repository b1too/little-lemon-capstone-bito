import React from "react";
import Swal from "sweetalert2";

interface BookingTicketProps {
    date: string;
    table: string;
    time: string;
    email: string;
    name: string;
}

const handleDownloadTicket = () => {
    Swal.fire({
      title: "Ticket Download",
      text: "Download Ticket functionality is coming soon!",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#f4ce14",
    });
  };

const BookingTicket: React.FC<BookingTicketProps> = ({
    date,
    table,
    time,
    email,
    name,
}) => {

    
    return (
        <div className="bg-white rounded-xl p-6 text-center">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-3xl font-bold">Little</h2>
                    <p className="text-gray-500">Arrival</p>
                </div>
                <div className="text-5xl">
                    🍋
                </div>
                <div>
                    <h2 className="text-3xl font-bold">Lemon</h2>
                    <p className="text-gray-500">Ticket</p>
                </div>
            </div>

            <div className="relative border-t border-dashed my-4">
                <div className="absolute rounded-full w-5 h-5 bg-gray-100 -mt-2 -left-8"></div>
                <div className="absolute rounded-full w-5 h-5 bg-gray-100 -mt-2 -right-8"></div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-left text-sm">
                <div>
                    <p className="text-gray-500">Customer Name</p>
                    <p className="font-bold">{name || "N/A"}</p>
                </div>
                <div className="overflow-hidden whitespace-nowrap text-ellipsis lg:max-w-[200px]">
                    <p className="text-gray-500">Email</p>
                    <p className="font-bold overflow-hidden whitespace-nowrap text-ellipsis">{email || "N/A"}</p>
                </div>


                <div>
                    <p className="text-gray-500">Table</p>
                    <p className="font-bold">{table || "N/A"}</p>
                </div>
                <div>
                    <p className="text-gray-500">Date</p>
                    <p className="font-bold">{date || "N/A"}</p>
                </div>
                <div>
                    <p className="text-gray-500">Reservation Time</p>
                    <p className="font-bold">{time || "N/A"}</p>
                </div>
            </div>

            <button
                className="mt-6 bg-[#f4ce14] text-white px-4 py-2 rounded-lg hover:bg-[#dbb912] transition-colors"
                onClick={() => handleDownloadTicket()}
            >
                Download Ticket
            </button>
        </div>
    );
};

export default BookingTicket;

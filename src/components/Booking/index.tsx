import React, { useState } from 'react';

const Booking = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${name} on ${date} at ${time} for ${guests} guests.`);
  };

  return (
    <section className="p-6 bg-white">
      <h2 className="text-3xl font-bold">Reserve a Table</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="number"
          min="1"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          Confirm Reservation
        </button>
      </form>
    </section>
  );
};

export default Booking;

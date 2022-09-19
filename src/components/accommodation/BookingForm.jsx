import { useState } from "react";
import { date } from "yup";

export const BookingForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState();
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [message, setMessage] = useState();

  return (
    <form>
      <input
        type="text"
        name="full name"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="date"
        name="Check In date"
        placeholder="Check In"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
      />
      <input
        type="date"
        name="Check Out"
        placeholder="Check Out"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
      />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

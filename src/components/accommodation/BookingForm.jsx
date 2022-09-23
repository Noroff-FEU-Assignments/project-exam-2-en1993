import { useState, useEffect } from "react";
import { date } from "yup";
import styles from "../accommodation/AccommodationPage.module.css";

export const BookingForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState();
  const [adults, setAdults] = useState();
  const [kids, setKids] = useState();
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrormessage] = useState("");

  // useEffect(() => {
  //   if (fullName.length < 4) {
  //     setErrormessage("Full Name required");
  //   } else {
  //     setErrormessage("");
  //   }
  // }, [fullName]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const hotelsInquiry = {
      fullName,
      email,
      adults,
      kids,
      checkIn,
      checkOut,
      message,
    };

    console.log("HOTELSINQUIRY:", hotelsInquiry);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.bookingFormWrapper}>
        <div className={styles.bookingFormWrapperContainer}>
          <div className={styles.bookingFormWrapperContent}>
            <div>
              <label>Full Name</label>
              <input
                type="text"
                name=" full name"
                required
                placeholder=" Type Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <div className={styles.errorText}>
                {errorMessage && <p>{errorMessage}</p>}
              </div>
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder=" Type Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.bookingFormWrapperContent}>
            <div>
              <label>Specific Message</label>
              <textarea
                name="message"
                id="message"
                required
                placeholder=" Type Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={styles.personQuantity}>
          <div>
            <label>Adults</label>
            <input
              type="number"
              name="adults"
              required
              placeholder=" Type Number of Adult"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
            />
          </div>
          <div>
            <label>kids</label>
            <input
              type="number"
              name="kids"
              required
              placeholder=" Type Number of Kids"
              value={kids}
              onChange={(e) => setKids(Number(e.target.value))}
            />
          </div>
        </div>
        <div className={styles.dateContainer}>
          <div>
            <label>Check In</label>
            <input
              type="date"
              name="Check In date"
              required
              placeholder="Check In"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>

          <div>
            <label>Check Out</label>
            <input
              type="date"
              name="Check Out"
              required
              placeholder="Check Out"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.bookingCtaDiv}>
          <button className={styles.bookingFormCTA}>Submit</button>
        </div>
      </div>
    </form>
  );
};

// function validateEmail(email) {
//   const regEx = /\S+@\S+\.\S+/;
//   const patternMatches = regEx.test(email);
//   return patternMatches;
// }

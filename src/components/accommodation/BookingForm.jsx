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

  useEffect(() => {
    if (fullName.length || message.length < 4) {
      setErrormessage("Full Name required");
    } else {
      setErrormessage("");
    }

    // if (email.length < 4) {
    //   setErrormessage("Full Name required");
    // } else {
    //   setErrormessage("");
    // }

    // if (adults.length || kids.length < 0) {
    //   setErrormessage("Quantity required");
    // } else {
    //   setErrormessage("");
    // }

    // if (checkIn.length || checkOut.length < 0) {
    //   setErrormessage("Date required");
    // } else {
    //   setErrormessage("");
    // }
  }, [fullName, email, adults, kids, checkIn, checkOut, message]);

  return (
    <form>
      <div className={styles.bookingFormWrapper}>
        <div className={styles.bookingFormWrapperContainer}>
          <div className={styles.bookingFormWrapperContent}>
            <div>
              <label>Full Name</label>
              <input
                type="text"
                name="full name"
                placeholder="Full Name"
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
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={styles.errorText}>
                {errorMessage && <p>{errorMessage}</p>}
              </div>
            </div>
          </div>
          <div className={styles.bookingFormWrapperContent}>
            <div>
              <label>Specific Message</label>
              <textarea
                name="message"
                id="message"
                cols=""
                rows=""
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className={styles.errorText}>
                {errorMessage && <p>{errorMessage}</p>}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.personQuantity}>
          <div>
            <label>Adults</label>
            <input
              type="number"
              name="adults"
              placeholder="Adult"
              value={adults}
              onChange={(e) => setAdults(Number(e.target.value))}
            />
            <div className={styles.errorText}>
              {errorMessage && <p>{errorMessage}</p>}
            </div>
          </div>
          <div>
            <label>kids</label>
            <input
              type="number"
              name="kids"
              placeholder="Kids"
              value={kids}
              onChange={(e) => setKids(Number(e.target.value))}
            />
            <div className={styles.errorText}>
              {errorMessage && <p>{errorMessage}</p>}
            </div>
          </div>
        </div>
        <div className={styles.dateContainer}>
          <div>
            <label>Check In</label>
            <input
              type="date"
              name="Check In date"
              placeholder="Check In"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
            <div className={styles.errorText}>
              {errorMessage && <p>{errorMessage}</p>}
            </div>
          </div>

          <div>
            <label>Check Out</label>
            <input
              type="date"
              name="Check Out"
              placeholder="Check Out"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
            <div className={styles.errorText}>
              {errorMessage && <p>{errorMessage}</p>}
            </div>
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

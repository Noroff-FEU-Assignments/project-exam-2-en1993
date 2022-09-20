import { useState } from "react";
import { date } from "yup";
import styles from "../accommodation/AccommodationPage.module.css";

export const BookingForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState();
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [message, setMessage] = useState();

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
          </div>
        </div>
      </div>
      <div className={styles.bookingCtaDiv}>
        <button className={styles.bookingFormCTA}>Submit</button>
      </div>
    </form>
  );
};

import { useState, useEffect } from "react";
import styles from "../contact/ContactForm.module.css";

export const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const ContactInquiry = {
      email,
      firstName,
      lastName,
      message,
    };

    console.log("CONTACT-INQUIRY:", ContactInquiry);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.ContactFormWrapper}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name=" first name"
            required
            placeholder=" Type First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name=" last name"
            required
            placeholder=" Type Last Name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
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

        <div>
          <button className={styles.ContactFormCTA}>Submit</button>
        </div>
      </div>
    </form>
  );
};

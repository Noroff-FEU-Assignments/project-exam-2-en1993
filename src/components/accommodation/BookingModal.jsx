import styles from "../accommodation/AccommodationPage.module.css";
import React from "react";

export const BookingModal = ({ shouldShow, onRequestClose, children }) => {
  return shouldShow ? (
    <div className={styles.modalBackground} onClick={onRequestClose}>
      <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <button onClick={onRequestClose}>Close</button>
        {children}
      </div>
    </div>
  ) : null;
};

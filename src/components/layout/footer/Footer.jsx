import React from "react";
import Heading from "../Heading";
import styles from "../footer/Footer.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.footerContent}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContactInfo}>
          <Heading content=" Contact Us Now To Book" size="3" />
          <p>
            <FaPhoneAlt className={styles.footerContenIcons}/> 0047 22 00 44 00
          </p>
          <p>
            <GrMail  className={styles.footerContenIconsGM}/> Holidaze@info.no
          </p>
        </div>
        <div className={styles.footerIcons}>
          <Heading content=" Follow Us " size="3" />
          <span className={styles.footerSocialIcons}>
            <p>
              <AiFillPlayCircle  className={styles.footerContenIconsPC}/>
            </p>
            <p>
              <BsFacebook  className={styles.footerContenIcons}/>
            </p>
          </span>
        </div>
        <div className={styles.footerFollow}>
          <Heading content=" Follow Us " size="3" />
          <span className={styles.followContent}>
            <p>&copy; 2022 HOLIDAZE B&Bs</p>
            <p>Created by HOLIDAZE B&Bs</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

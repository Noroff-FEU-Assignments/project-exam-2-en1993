import Footer from "../layout/footer/Footer";
import Heading from "../layout/Heading";
import styles from "../contact/ContactPage.module.css";
import image1 from "../images/pexels-stein-egil-liland-1933239.jpg";
import { ContactForm } from "./ContactForm";

const ContactPage = () => {
  return (
    <>
      <div className={styles.contactH1}>
        <Heading content="Contact " size="1" />
      </div>
      <main>
        <section>
          <Heading content="Contact Us" size="2" />
          <div className={styles.welcomeContactPicture}></div>
        </section>
        <section>
          <div className={styles.locationContent}>
            <Heading content="Location" size="2" />
            <div className={styles.contactContent}>
              <div className={styles.contactContent0}>
                <img
                  src={image1}
                  alt="North light in Bergen Norway"
                  className={styles.contactPic}
                />
              </div>
              <div className={styles.contactContent0}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16005.387716698662!2d10.70041885!3d59.904369749999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sno!4v1664448588785!5m2!1sen!2sno"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <Heading content="Message us" size="3" />
          <div className={styles.contactForm}>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;

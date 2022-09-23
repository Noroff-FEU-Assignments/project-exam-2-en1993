import Footer from "../layout/footer/Footer";
import Heading from "../layout/Heading";
import styles from "../contact/ContactPage.module.css";
import image1 from "../images/pexels-stein-egil-liland-1933239.jpg";

const ContactPage = () => {
  return (
    <>
      <Heading content="Contact " size="1" />
      <main>
        <section>
          <Heading content="Contact Us" size="2" />
          <div className={styles.welcomeContactPicture}></div>
        </section>
        <section>
          <Heading content="Location" size="2" />
          <div className={styles.contactContent}>
            <div className={styles.contactContent0}>
              <img
                src={image1}
                alt="North light in Bergen Norway"
                className={styles.contactPic}
              />
            </div>
            <div className={styles.contactContent0}></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;

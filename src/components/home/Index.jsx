import Footer from "../layout/footer/Footer";
import Heading from "../layout/Heading";
import HomePost from "./HomePost";
import styles from "../home/Index.module.css";

const HomePage = () => {
  return (
    <>
      <main>
        <Heading content=" This is Home Page" />
        <section className="welcome-section">
          <div className="slider-wrapper">
            <HomePost />
          </div>
        </section>
        <section>
          <div className={styles.servicesContainer}>
            <div className={styles.servicesContent}></div>
            <div className={styles.servicesContent}></div>
            <div className={styles.servicesContent}></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

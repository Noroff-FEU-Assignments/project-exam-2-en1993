import Footer from "../layout/footer/Footer";
import Heading from "../layout/Heading";
import AccommodationPost from "./AccommodationPosts";
import styles from "../accommodation/AccommodationPage.module.css";
import AccommodationList from "./AccommodationList";

const AccommodationPage = () => {
  return (
    <>
      <main>
        <Heading content=" Accommodation " />
        <section>
          <div className="slider-wrapper">
            <AccommodationPost />
          </div>
        </section>
        <section>
          <Heading content="Our Accommodation" size="2" />
          <div className={styles.productsWrapper}>
            <AccommodationList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AccommodationPage;

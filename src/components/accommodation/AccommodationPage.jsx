import Footer from "../layout/footer/Footer";
import Heading from "../layout/Heading";
import AccommodationPost from "./AccommodationPosts";
import styles from "../accommodation/AccommodationPage.module.css";
import AccommodationList from "./AccommodationList";

const AccommodationPage = () => {
  return (
    <>
      <main>
        <Heading content=" This is Accommodation Page" />
        <section>
          <div className="slider-wrapper">
            <AccommodationPost />
          </div>
        </section>
        <section>
          <Heading content="Our Accommodation" size="2"/>
          {/* <div className={styles.accommFormWrapper}>
            <form action="">
              <b>Check In: </b>
              <input
                type="date"
                placeholder="Check In"
                className={styles.checkIn}
              />
              <b>Check Out: </b>
              <input
                type="date"
                placeholder="CheckOut"
                className={styles.checkOut}
              />
              <input
                type="number"
                placeholder="Adults"
                className={styles.quantityAdults}
              />
              <input
                type="number"
                placeholder="Kids"
                className={styles.quantityKids}
              />
              <button>Search</button>
            </form>
          </div> */}
          <div className={styles.productsWrapper}>
            <AccommodationList/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AccommodationPage;

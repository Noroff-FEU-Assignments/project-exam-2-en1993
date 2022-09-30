import Footer from '../layout/footer/Footer';
import Heading from '../layout/Heading';
import AccommodationPost from './AccommodationPosts';
import styles from '../accommodation/AccommodationPage.module.css';
import AccommodationList from './AccommodationList';
import AccommodationWithSearch from './AccommodationWithSearch';
// import SearchBar from "./SearchBar";

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
            <AccommodationWithSearch />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AccommodationPage;

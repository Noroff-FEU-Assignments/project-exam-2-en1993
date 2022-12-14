import Footer from "../layout/footer/Footer";
import Heading from "../layout/Heading";
import HomePost from "./HomePost";
import styles from "../home/Index.module.css";
import { RiInformationFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { RiRestaurantFill } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import FeaturedPost from "./Featured";

import image1 from "../images/pexels-kseniya-kobi-8159777.jpg";

const HomePage = () => {
  return (
    <>
      <main>
        <Heading content=" Home " size="1" />
        <section>
          <div className={styles.homeWelcomePicture}>
            <img src={image1} alt="house and garden" />
          </div>
        </section>
        <section className="welcome-section">
          <div className="slider-wrapper">
            {/* <RiArrowLeftSLine className={styles.arrowIcons} />
            <RiArrowRightSLine className={styles.arrowIcons} /> */}
            <HomePost />
          </div>
        </section>
        <section>
          <Heading content="Services" size="2" />
          <div className={styles.servicesContainer}>
            <div className={styles.servicesContent}>
              <RiInformationFill className={styles.servicesIcons} />
              <Heading content="Information" size="3" />
              <p>
                Ask us what kind of offer we have. Whether it is activity or if
                there is something needed
              </p>
            </div>
            <div className={styles.servicesContent}>
              <FaPhoneAlt className={styles.servicesIcons} />
              <Heading content="Phone" size="3" />
              <p>Call us for room services or if you need anything.</p>
            </div>
            <div className={styles.servicesContent}>
              <RiRestaurantFill className={styles.servicesIcons} />
              <Heading content="Restaurant" size="3" />
              <p>
                Lots to choose from in the breakfast meal and much more on offer
                in our restaurant.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Heading content="Featured" size="2" />
          <div className={styles.featuredContainer}>
            <FeaturedPost />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

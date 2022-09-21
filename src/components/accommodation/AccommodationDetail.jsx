import { useState, useEffect } from "react";
import { PRODUCTS_API } from "../../constants/productsApi";
import Heading from "../layout/Heading";
import styles from "../accommodation/AccommodationPage.module.css";
import { RiInformationFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { RiRestaurantFill } from "react-icons/ri";
import { useParams, useNavigate } from "react-router-dom";
import { BookingModal } from "./BookingModal";
import { BookingForm } from "./BookingForm";
import Footer from "../layout/footer/Footer";

function AccommodationDetail() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shouldShowModal, setShouldShowModal] = useState(false);

  let navigate = useNavigate();

  const { id } = useParams();

  if (!id) {
    navigate.push("/accommodation");
  }
  const url = PRODUCTS_API + "/" + id;

  useEffect(
    function () {
      async function fetchData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setPost(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fetchData();
    },
    [url]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }

  return (
    <>
      <Heading content="Specific Page" size="1" />
      <main className={styles.productDetail}>
        <section>
          <div
            className={[styles.detailContents, styles.detailContent].join("")}
          >
            <Heading content={post.name} size="2" />
            <img
              src={post.images[0].src}
              alt={post.name}
              className={styles.productDetailPicture}
            />
          </div>
          <div className={styles.detailContent0}>
            <div
              dangerouslySetInnerHTML={{ __html: post.description }}
              className={styles.detailContent1}
            />
            <div className={styles.detailContent2}>
              <p>From: ${post.prices.price.slice(0, 3)}</p>
              <p>Per Night</p>

              <div>
                <FaPhoneAlt className={styles.productsIcons} />
                <RiInformationFill className={styles.productsIcons} />
                <RiRestaurantFill className={styles.productsIcons} />
              </div>
              <>
                <BookingModal
                  shouldShow={shouldShowModal}
                  onRequestClose={() => setShouldShowModal(false)}
                >
                  <BookingForm />
                </BookingModal>
                <button
                  className={styles.bookNowCTA}
                  onClick={() => setShouldShowModal(!shouldShowModal)}
                >
                  Book Now
                </button>
              </>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AccommodationDetail;

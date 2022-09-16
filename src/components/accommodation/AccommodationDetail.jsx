import { useState, useEffect } from "react";
import { PRODUCTS_API } from "../../constants/productsApi";
import Heading from "../layout/Heading";
import styles from "../accommodation/AccommodationPage.module.css";
// import { RiInformationFill } from "react-icons/ri";
// import { FaPhoneAlt } from "react-icons/fa";
// import { RiRestaurantFill } from "react-icons/ri";
import { useParams, useNavigate } from "react-router-dom";

function AccommodationDetail() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className={styles.productDetail}>
      <Heading content={post.name} size="1" />
      <div>
        <img
          src={post.images[0].src}
          alt={post.name}
          className={styles.productPicture}
        />
      </div>
      
      <p>{post.description}</p>
    </div>
  );
}

export default AccommodationDetail;

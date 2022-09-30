import { useState, useEffect } from 'react';
import { PRODUCTS_API } from '../../constants/productsApi';
import styles from '../accommodation/AccommodationPage.module.css';
import AccommodationList from './AccommodationList';

export default function AccommodationWithSearch() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(PRODUCTS_API);

        if (response.ok) {
          const json = await response.json();
          console.log('ACCOMMODATION..POSTS:', json);
          setPosts(json);
          setFilteredPosts(json);
        } else {
          setError('An error occured');
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  function onSearchInputChange(event) {
    const searchInput = event.currentTarget.value;
    const filterPosts = posts.filter((post) => {
      if (post.name.toLowerCase().startsWith(searchInput.toLowerCase())) {
        return true;
      }
    });
    setFilteredPosts(filterPosts);
  }

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <div>An error occured : {error} </div>;
  }

  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          placeholder=" Search Product.."
          onChange={onSearchInputChange}
        />
      </div>
      <AccommodationList posts={filteredPosts} />
    </>
  );
}

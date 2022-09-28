import { useState, useEffect } from "react";
import { SECONDARY_API } from "../../constants/secondaryApi";
import Heading from "../layout/Heading";
import styles from "../home/Index.module.css";

export default function FeaturedPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(SECONDARY_API);

        if (response.ok) {
          const json = await response.json();
          console.log("HOMEPOST:", json);
          setPosts(json);
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
  }, []);

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return <div>An error occured : {error} </div>;
  }

  return (
    <>
      {posts
        .filter(function (post) {
          return post.id === 625 || post.id === 658 || post.id === 660;
        })
        .map(function (post) {
          return (
            <div key={post.id}>
              <div className={styles.featuredContent}>
                <img
                  src={post.source_url}
                  alt={post.title.rendered}
                  className={styles.featuredPic}
                />
                <Heading content={post.title.rendered} size="3" />
              </div>
            </div>
          );
        })}
    </>
  );
}

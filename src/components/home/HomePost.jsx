import { useState, useEffect } from "react";
import { SECONDARY_API } from "../../constants/secondaryApi";
import Heading from "../layout/Heading";

export default function HomePost() {
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

  function galleryShowing(galleryShow) {
    var shows = document.querySelectorAll(
      `#${galleryShow.id} [role="list"] .show`
    );

    var index = 0,
      time = 5000;
    shows[index].classList.add("activate");

    setInterval(() => {
      shows[index].classList.remove("activate");
      index++;

      if (index === shows.length) index = 0;
      shows[index].classList.add("activate");
    }, time);
  }

  var galleryShows = document.querySelectorAll('[data-element="galleryShow"]');
  galleryShows.forEach(galleryShowing);

  return (
    <>
      {posts
        .filter(function (post) {
          return post.id === 661 || post.id === 660;
        })
        .map(function (post) {
          return (
            <div key={post.id}>
              <div id="showGallery" data-element="galleryShow">
                <div role="list">
                  <div className="show">
                    <Heading content={post.title.rendered} size="3" />
                    <img
                      src={post.source_url}
                      alt={post.title.rendered}
                      className="slideImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

import { useState, useEffect } from "react";
import { PRODUCTS_API } from "../../constants/productsApi";
import Heading from "../layout/Heading";

export default function AccommodationPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(PRODUCTS_API);

        if (response.ok) {
          const json = await response.json();
          console.log("ACCOMMODATION..POSTS:", json);
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured : {error} </div>;
  }

  // for (let i = 0; i < posts.length; i++) {
  //   if (i === 3) {
  //     break;
  //   }
  // }

  // for (let i = id  posts.id = id.0 && id.8 && id.9; i++) {
  //   if(i === id){ break; }
  // }

  function galleryShowing(galleryShow) {
    var shows = document.querySelectorAll(
      `#${galleryShow.id} [role="list"] .show`
    ); // Get an array of slides

    var index = 0,
      time = 1000000;
    shows[index].classList.add("activate");

    setInterval(() => {
      shows[index].classList.remove("activate");
      index++;

      if (index === shows.length) index = 0;
      shows[index].classList.add("activate");
    }, time);
  }
  // console.log({ galleryShows });
  var galleryShows = document.querySelectorAll('[data-element="galleryShow"]');
  galleryShows.forEach(galleryShowing);

  return (
    <>
      {posts.map(function (post) {
        return (
          <div key={post.id}>
            <div id="showGallery" data-element="galleryShow">
              <div role="list">
                <div className="show">
                  <Heading content={post.name} size="3" />
                  <img
                    src={post.images[0].src}
                    alt={post.name}
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

import { useState, useEffect } from "react";
import { SECONDARY_API } from "../../constants/secondaryApi";

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
  return (
    <>
      {posts.map(function (post) {
        return (
          <div key={post.id}>
            {post.title.rendered}
            <div className="slidePic">
              {" "}
              <img src={post.source_url} alt={post.title.rendered} />
            </div>
          </div>
        );
      })}
    </>
  );
}

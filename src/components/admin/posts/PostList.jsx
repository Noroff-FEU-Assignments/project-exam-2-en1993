import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import Heading from "../../layout/Heading";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();

  useEffect(function () {
    async function getMedia() {
      try {
        const response = await http.get("wp/v2/posts");
        console.log("response", response);
        setPosts(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getMedia();
  }, []);

  if (loading) return <div className="loader"></div>;

  if (error) return <div>{}</div>;

  return (
    <>
      <div>
        <Heading content="  PostList Page" size="3" />

        <ul className="posts">
          {posts.map((media) => {
            return (
              <li key={media.id}>
                <Link to={`/admin/posts/edit/${media.id}`}>
                  {media.title.rendered}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

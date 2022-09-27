import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import Heading from "../../layout/Heading";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();

  useEffect(function () {
    async function getMedia() {
      try {
        // const response = await http.get("/wc/store/products");
        const response = await http.get("/wp/v2/product");
        console.log("response", response);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getMedia();
  }, []);

  if (loading) return <div>Loading posts...</div>;

  if (error) return <div>{}</div>;
  console.log(products);
  return (
    <>
      <Heading content="  ProductList Page" size="3" />

      <ul className="products">
        {products.map((media) => {
          return (
            <li key={media.id}>
              <Link to={`/admin/products/edit/${media.id}`}>
                {/* {media.title.rendered} */}
                {media.id}
                {media.title.rendered}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

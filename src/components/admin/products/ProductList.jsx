import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAxios from '../../../hooks/useAxios';
import Heading from '../../layout/Heading';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();

  useEffect(function () {
    async function getMedia() {
      try {
        // const response = await http.get("/wc/store/products");
        const response = await http.get('/wp/v2/product?_embed');
        console.log('response', response);

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

  if (loading) return <div className="loader"></div>;

  if (error) return <div>{}</div>;

  return (
    <>
      <Heading content="  ProductList Page" size="3" />
      <div className="productListContent">
        <ul className="products">
          {products.map((media) => {
            // const image = media?._embedded?.['wp:featuredmedia'][0]?.source_url;
            return (
              <li key={media.id}>
                <Link to={`/admin/products/edit/${media.id}`}>
                  {media.title.rendered}
                </Link>
                {/* <img src={image} alt="" /> */}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

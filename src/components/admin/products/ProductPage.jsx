import Heading from "../../layout/Heading";
import AdminPage from "../AdminPage";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";

const ProductPage = () => {
  return (
    <>
      <AdminPage>
        <Heading content="  Product Page" size="2" />
        <p>
          <Link to="/admin/products/add">Add product</Link>
        </p>
        <p>List products here</p>
        <ProductList />
      </AdminPage>
    </>
  );
};

export default ProductPage;

import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <nav className="admin">
        Sections : <Link to="/admin/posts">Posts</Link> |
        <Link to="/admin/products">Products</Link> |
        <Link to="/admin/hotelsInquiry"> Hotels Inquiry</Link> |
        <Link to="/admin/contactInquiry"> Contact Inquiry</Link>
      </nav>
    </>
  );
};

export default AdminMenu;

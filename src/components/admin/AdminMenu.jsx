import { Link } from "react-router-dom";

const AdminMenu = () => {
  return ( 
    <nav className="admin">
      Sections : <Link to='/admin/posts'>Posts</Link>
    </nav>
   );
}
 
export default AdminMenu;
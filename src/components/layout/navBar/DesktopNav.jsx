import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import logo from '../../images/logo.jpg'

const DesktopNav = () => {
  return ( 
    <header className="desktopNav">
      <Link to="/" className="logo"> <img src={logo} alt="logo" /></Link>
      <nav className="DesktopNavLinks">
        <NavLinks/>
      </nav>
    </header>
   );
}
 
export default DesktopNav;
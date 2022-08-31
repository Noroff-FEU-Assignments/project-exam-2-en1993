import React from "react";
import DesktopNav from "./navBar/DesktopNav";
import MobileNav from "./navBar/MobileNav";

const NavBar = () => {
  return ( 
    <>
      <MobileNav/>
      <DesktopNav/>
    </>
   );
}
 
export default NavBar;
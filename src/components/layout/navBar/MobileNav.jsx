import React from "react";
import NavLinks from "./NavLinks";
import {RiMenu3Line} from 'react-icons/ri';
import {RiCloseFill} from 'react-icons/ri';
import {useState} from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const burgerIcon = 
    <RiMenu3Line className='burger' onClick={() => setOpen(!open)} />
  
  const burgerCloseIcon = 
    <RiCloseFill className='burgerClose' onClick={() => setOpen(!open)} />
  
  const closeMobileMenu = () => setOpen(false);
  return (
    <header className="responsiveNav">
      <nav>
        {open ? burgerCloseIcon : burgerIcon}
        {open && <NavLinks isMobile ={true} closeMobileMenu={closeMobileMenu} />}
      </nav>
    </header>
  );
};

export default MobileNav;

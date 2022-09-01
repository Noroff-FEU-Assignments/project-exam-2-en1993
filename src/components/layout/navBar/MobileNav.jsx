import React from "react";
import NavLinks from "./NavLinks";
import {HiOutlineBars3CenterLeft} from 'react-icons/hi';
import {IoCloseSharp} from 'react-icons/io';
import {useState} from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const burgerIcon = 
    <HiOutlineBars3CenterLeft className='burger' onClick={() => setOpen(!open)} />
  
  const burgerCloseIcon = 
    <IoCloseSharp className='burgerClose' onClick={() => setOpen(!open)} />
  
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

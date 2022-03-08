import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import MobileLinks from "./MobileLinks";

const MobileNavigation = ({ isAuth, setIsAuth }) => {
  const [open, setOpen] = useState(false);

  const burgerIcon = (
    <GiHamburgerMenu
      className="Hamburger"
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <MdOutlineClose
      className="Hamburger"
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeItem = () => setOpen(false);
  return (
    <nav className="mobile-navigation" style={{backgroundColor: "#52ccd1"}}>
      <div className="burgers"> {open ? closeIcon : burgerIcon} </div>
      <h2 style={{ marginLeft: "10px", marginTop: "10px"}} className="fm">Tasty Donuts</h2>
      {open && (
        <>
          <MobileLinks
            isAuth={isAuth}
            setIsAuth={setIsAuth}
            isMobile={true}
            closeItem={closeItem}
          />
        </>
      )}
    </nav>
  );
};

export default MobileNavigation;
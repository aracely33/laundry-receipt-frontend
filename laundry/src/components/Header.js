import React, {useContext, useState} from "react";
import {UserContext} from "../contexts/UserContexts";
import logoImage from "../images/logoLaundry.svg";
import closeIcon from "../images/Close-Icon-min.png";
import toggleIcon from "../images/toggleIcon.svg";
import BuyCart from "./BuyCart";

import {Link, useMatch} from "react-router-dom";

function Header({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  countProducts,
  setCountProducts,
  handleSignOut,
  email,
}) {
  const currentUser = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const [showSlogan, setShowSlogan] = useState(false);
  const onSignOut = () => {
    handleSignOut();
    setOpen(false);
  };

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleShowSlogan = () => {
    setShowSlogan(!showSlogan);
  };

  return (
    <>
      <header className={`header ${open && "header_opened"}`}>
        <div className="header__brand">
          <img
            src={logoImage}
            alt="Laundry Logo"
            onClick={handleShowSlogan}
            className="header__logo"
          />
          <span
            className={`header__slogan ${
              showSlogan && "header__slogan_showed"
            }`}
          >
            "Los trapitos sucios ya no se lavan en casa"
          </span>
        </div>

        {useMatch("/signin") && (
          <Link to="/signup" className="header__link">
            Signup
          </Link>
        )}
        {useMatch("/signup") && (
          <Link to="/signin" className="header__link">
            Signin
          </Link>
        )}
        {useMatch("/") && (
          <>
            <BuyCart
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
            />
            <div
              className={`header__user-info ${
                open && "header__user-info_opened"
              }`}
            >
              <span className="header__user-info-text text">
                Le atiende: {currentUser.first_name}
              </span>
              <button
                className="header__logout-button header__user-info-text text"
                onClick={onSignOut}
              >
                Logout
              </button>
            </div>
            {open ? (
              <img
                src={closeIcon}
                alt="close menu"
                className="header__close-icon"
                onClick={handleMenu}
              />
            ) : (
              <img
                src={toggleIcon}
                alt="toggleIcon"
                className="header__menu-icon"
                onClick={handleMenu}
              />
            )}
          </>
        )}
      </header>
    </>
  );
}

export default Header;

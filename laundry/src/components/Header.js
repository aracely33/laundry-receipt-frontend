import React, {useContext, useState} from "react";
import {UserContext} from "../contexts/UserContexts";
import logoImage from "../images/logoLaundry.svg";
import closeIcon from "../images/Close-Icon-min.png";
import toggleIcon from "../images/toggleIcon.svg";

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
  const [active, setActive] = useState(false);
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
  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);
    setTotal(total - product.price * product.quantity);

    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
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
            <div
              className={`header__user-info ${
                open && "header__user-info_opened"
              }`}
            >
              <span className="header__email">{email}</span>
              <button className="header__logout-button" onClick={onSignOut}>
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

/*        <h1>Le atiende: {currentUser.first_name}</h1>

        <div className="container-icon ">
          <div
            className="container-cart-icon"
            onClick={() => setActive(!active)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-cart"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <div className="count-products">
              <span id="contador-productos">{countProducts}</span>
            </div>
          </div>

          <div
            className={`container-cart-products ${active ? "" : "hidden-cart"}`}
          >
            {allProducts.length ? (
              <>
                <div className="row-product ">
                  {allProducts.map((product) => (
                    <div className="cart-product" key={product.id}>
                      <div className="info-cart-product">
                        <span className="cantidad-producto-carrito">
                          {product.quantity}
                        </span>
                        <p className="titulo-producto-carrito">
                          {product.nameProduct}
                        </p>
                        <span className="precio-producto-carrito">
                          ${product.price}
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="icon-close"
                        onClick={() => onDeleteProduct(product)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  ))}
                </div>

                <div className="cart-total ">
                  <h3>Total:</h3>
                  <span className="total-pagar">${total}</span>
                </div>
                <button onClick={onCleanCart} className="btn-clear-all">
                  Vaciar carrito
                </button>
              </>
            ) : (
              <p className="cart-empty">El carrito está vacío</p>
            )}
          </div>
        </div>*/

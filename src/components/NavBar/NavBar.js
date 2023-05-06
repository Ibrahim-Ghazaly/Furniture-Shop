import React from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/user-slice";
import { resetwishlist,resetCart } from '../../redux/slices/cart-slice';

import { useDispatch, useSelector } from "react-redux";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  const products = useSelector((state) => state.cartWishList.cart);
  const wishlist = useSelector((state) => state.cartWishList.wishlist);

  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <Link to="/" className="logo">
            Woodex
          </Link>

          <div className="header-action">
            <button
              className="header-action-btn btn"
              aria-label="favorite list"
              onClick={() =>
                user.isUser ? navigate("/wishlist") : navigate("/login")
              }
            >
              <i className="fi fi-rr-heart"></i>
              <span className="btn-badge">{wishlist.length}</span>
            </button>

            <button
              className="header-action-btn btn"
              aria-label="cart"
              onClick={() =>
                user.isUser ? navigate("/cart") : navigate("/login")
              }
            >
              <i className="fi fi-rr-shopping-cart"></i>
              <span className="btn-badge">{products.length}</span>
            </button>

            {/* togller */}

            <button
              className="btn menu-burger "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i class="fi fi-rr-menu-burger "></i>
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header">
                <Link to="/" className="logo">
                  Woodex
                </Link>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                </ul>
                {user.isUser ? (
                  <div className="d-flex align-items-center gap-1 mt-3">
                    <button
                      className="btn logout-btn"
                      onClick={() => {
                        dispatch(logout());
                        dispatch(resetCart());
                        dispatch(resetwishlist())
                         
                      }}
                    >
                      Logout
                    </button>
                    <span>Hello {user.username}</span>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="login-btn btn mt-3"
                    aria-label="user"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;

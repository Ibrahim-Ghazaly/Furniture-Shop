import React, { useEffect } from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, register } from "../../redux/slices/user-slice";
import { resetCart,resetwishlist } from "../../redux/slices/cart-slice";

import Cart from "../../pages/Cart/Cart";
import Wishlist from "../../pages/Wishlist/Wishlist";
import { useState } from "react";


export default function NavBar() {
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const { username, token, seller, userId } = useSelector(
    (state) => state.user
  );
  const products = useSelector((state) => state.cartWishList.cart);
  const wishlist = useSelector((state) => state.cartWishList.wishlist);

  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleCartBtn = (e)=>{

    if(!token){
      navigate("/login")
    }else{
      setOpenCart(!openCart)
    }
  }

  const handleWishlistBtn= (e)=>{

    if(!token){
      navigate("/login")
    }else{
      setOpenWishlist(!openWishlist)
    }
  }

  
  const handleCloseCartClick = () => {
  if(openCart === true){
      setOpenCart(false)
    }  
  }

  const handleCloseWishlistClick = () => {
     if(openWishlist === true){
      setOpenWishlist(false)
    }
    }
    // e.stopPropagation()
  

   

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Baibers
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fi fi-br-menu-burger"></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              {seller && (
                <li className="nav-item">
                  <Link className="nav-link" to="/addproduct">
                    Add Product
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <div className="icons">
                <div
                  className="nav-link watclist"
                  onClick={handleWishlistBtn}
                >
                  {" "}
                  <i className="fi fi-rr-heart"></i>{" "}
                  <span className="span-watclist">{wishlist.length}</span>
                </div>

                {openWishlist && token && <Wishlist handleCloseWishlistClick = {handleCloseWishlistClick} />}
                <div className="cart-icon" onClick={handleCartBtn}>
                  <i className="fi fi-rr-shopping-cart"></i>
                  <span>{products.length}</span>
                </div>
              </div>
              {!token ? (
                <li className="nav-item">
                  <Link className="nav-link auth" to="/login">
                    Log In
                  </Link>
                </li>
              ) : (
                <>
                  {" "}
                  <span className="user-name-header">Hello {username}</span>
                  <button className="auth" onClick={() => {
                    dispatch(logout())
                    dispatch(resetCart())
                    dispatch(resetwishlist())

                    }}>
                    log out
                  </button>
                </>
              )}
            </ul>
          </div>
        </div>
        {openCart && token && <Cart handleCloseCartClick={handleCloseCartClick}/>}
      </nav>
    </>
  );
}

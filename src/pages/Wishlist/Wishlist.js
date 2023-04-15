import React from "react";
import "./Wishlist.css";
import { useSelector } from "react-redux";
import {
  removeItemWishlist,
  resetwishlist,
} from "../../redux/slices/cart-slice";
import { useDispatch } from "react-redux";
import axios from "axios";

const Wishlist = ({handleCloseWishlistClick}) => {
  let products = useSelector((state) => state.cartWishList.wishlist);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="wishlist">
        <div className="wishlistCloseBtn" onClick={handleCloseWishlistClick}>
         <i class="fi fi-br-cross"></i>  
      </div>
      <h1>Products in wishlist</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <span
            className="delete"
            onClick={() => dispatch(removeItemWishlist(item.id))}
          >
            <i class="fi fi-rr-trash"></i>
          </span>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>

      <span className="reset" onClick={() => dispatch(resetwishlist())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Wishlist;

import React ,{useState} from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/slices/cart-slice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const Cart = ({ handleCloseCartClick }) => {

  // const [openCart, setOpenCart] = useState(false);

  let products = useSelector(state => state.cartWishList.cart)

  const token = useSelector(state => state.user.token)
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51MaP2NKPmfOwAg7cxKiU8O7i6XwaSITvL0m8PVpFRA5ogKSwXR3z6nRqduHXk2Y1hxaeYNM3XtYxtzayuqN14AFs00jqDj6ckw"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/orders`,{  products})



      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id, 
      });

    } catch (err) {
      console.log(err);
    }
  };



  return (
  <div className="cart">
<div className="cartCloseBtn"  onClick={handleCloseCartClick}>
   <i class="fi fi-br-cross"></i>  
</div>
<h1>Products in your cart</h1>
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
      onClick={() => dispatch(removeItem(item.id))}
    ><i className="fi fi-rr-trash"></i></span>
  </div>
))}
<div className="total">
  <span>SUBTOTAL</span>
  <span>${totalPrice()}</span>
</div>
<button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
<span className="reset" onClick={() => dispatch(resetCart())}>
  Reset Cart
</span>
</div> 
   
  );
};

export default Cart;
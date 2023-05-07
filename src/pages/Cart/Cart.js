import React ,{useState}from 'react'
import './Cart.css'
import TopImage from '../../components/TopImage/TopImage'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem,resetCart } from '../../redux/slices/cart-slice';
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cart() {

  const products = useSelector((state) => state.cartWishList.cart);
 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [err,setErr]=useState(null)
  const [loading,setLoading] = useState(false)

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
    setLoading(true)
    try {
      const stripe = await stripePromise;
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/orders`,{products})

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id, 
      })
      dispatch(resetCart())
      setLoading(false)
    } catch (err) {
      setLoading(false)
      setErr(err)
      // console.log(err);
      navigate("/")
    }
  };

  return (
    <>
    <TopImage name={"Cart"}/>
    <div className='cart'>
        <div className='container'>
       {err && <div class="alert alert-danger" role="alert">{err}</div>}
            <div className='row mt-5'>
            {products.length > 0 ?<> <div className='col-12 '> 
            <div class="table-responsive">
            <table className="table table-bordered text-center ">
                    <thead className="table-light ">
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product =>{
                            return(
                                <tr key={product.id} className='content'>
                                    <td ><img src={product.img} alt="product iamge" style={{width:"80px",height:"80px"}}/></td>
                                    <td >{product.title}</td>
                                    <td >{product.price}</td>
                                <td >
                                        {product.quantity}  
                                </td>
                                <td > {product.quantity *  product.price}</td>
                                <td className='remove' style={{cursor:"pointer"}}  onClick={() => dispatch(removeItem(product.id))}><i className="fi fi-rr-trash"></i></td>
                                </tr>
                            )
                        })}
                    
                    </tbody>
                    </table>
            </div>
      
                
                   
                </div>
                <div className='col-12 d-flex justify-content-between mb-5 reset-payment'>
                <button className="reset btn btn-danger  my-3" onClick={() => dispatch(resetCart())}>
                   Reset Cart
                   </button>
                

                  <div className='payment p-3 my-3'>
                  <div className="total my-2">
                    <span>SUBTOTAL :</span>
                    <span>${totalPrice()}</span>
                  </div>
                  <button className='btn payment-btn' onClick={handlePayment}>
                  {loading ? <div class="spinner-border text-warning" role="status">
                 <span class="visually-hidden">Loading...</span>
                    </div> : 'PROCEED TO CHECKOUT'}
                    </button>


                   </div>
                 
                </div></>:<div className='d-flex  justify-content-center text-center mt-5 mb-5 fs-2 me-auto fw-bold'>your Cart is Empty</div>} 
               
            </div>
      
        </div>
    </div>
    </>
  )
}

export default Cart
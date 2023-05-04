import React from 'react'
import './Wishlist.css'
import TopImage from '../../components/TopImage/TopImage'
import { useDispatch, useSelector } from 'react-redux';
import { removeItemWishlist,resetwishlist } from '../../redux/slices/cart-slice';

function Wishlist() {

    const products = useSelector((state) => state.cartWishList.wishlist);
    console.log(products)
    const dispatch = useDispatch()
  return (
        <>
         <TopImage name ={"Wishlist"}/>
         <div className='wishlist'>
        <div className='container'>
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
                                    <td><img src={product.img} alt="product iamge" style={{width:"100px",height:"100px"}}/></td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                <td>
                                        {product.quantity}  
                                </td>
                                <td> {product.quantity *  product.price}</td>
                                <td style={{cursor:"pointer"}}  onClick={() => dispatch(removeItemWishlist(product.id))}><i className="fi fi-rr-trash"></i></td>
                                </tr>
                            )
                        })}
                    
                    </tbody>
                    </table>
            </div>
      
                
                   
                </div>
                <div className='col-12'>
                 
                    <button className="reset btn btn-danger mt-3 mb-5" onClick={() => dispatch(resetwishlist())}>
                    Reset Wishlist
                    </button>
                </div></>:<div className='d-flex  justify-content-center text-center m-5  fs-2  fw-bold'>Your Wishlist is Empty</div>} 
               
            </div>
      
        </div>
    </div>
        </> 

)
}

export default Wishlist
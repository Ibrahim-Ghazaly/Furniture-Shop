import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

function Card({product}) {
  return (
    <>
<div className="card m-2  fade-up" >
          {product?.attributes.isNew && <span className='new-season'>New Season</span>}

          <img
            src={
                product.attributes?.img?.data?.attributes?.url
            }
            alt="loading..."
            className="card-img-top main-img"
          />
          <img
            src={
                product.attributes?.img2?.data?.attributes?.url
            }
            alt="loading..."
            className="card-img-top second-img"
          />
  <div className="card-body">
    <h5 className="card-title">{product.attributes.title.substring(0,20)}</h5>
    <p className="card-text ">{product.attributes.desc}</p>

        <Link to={`/product/${product.id}`} className='btn product-btn d-flex align-items-center '>
           <span>Buy Now</span>
          <i className="fi fi-rs-eye mt-2 mx-1"></i>
        </Link>
    
   
  </div>
</div>
    </>
  )
}

export default Card
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import TopImage from "../../components/TopImage/TopImage";
import { getFilterdProducts } from "../../redux/slices/product-slice";
import Card from "../../components/Card/Card";



function Products() {

 const catId = useParams().id
 const dispatch = useDispatch()


//  get all category products 
  useEffect(()=>{
    dispatch(getFilterdProducts({catId}))
  },[catId])


// get all subcategory products 


const {items,isLoading,error} = useSelector(state => state.products.filterdProducts)

console.log(items)
console.log(error)



  


  return (
    <>
       <TopImage name={"Products"}/>

       <div className="products">
        <div className="container">
        {error && <div class="alert alert-danger" role="alert">{error}</div>}
        {isLoading && <div className="loader"></div>}
        <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 justify-content-center '>

          {items?.data?.map(product =>{
            return  <Card product={product} key={product.id} />
          })
          }
      </div>
 

        </div>
    </div>

    </>
  
  )
}

export default Products
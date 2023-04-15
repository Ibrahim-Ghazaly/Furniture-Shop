import React, { useEffect } from 'react'
import "./category.css";
import { Link } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Category() {

    const {data,loading,error} = useFetch(`${process.env.REACT_APP_API_URL}/categories?populate=*`)



  return (
<div className="categories">
  <div className='container'>
    {loading && <div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
</div>}
    {error && "some thing went wrong"}
    <h1 className="mb-5">categories</h1>
 
    <div className='box'>
    {data?.map((cat) =>{
   
   return (
   <div className="col" key={cat.id}>
   
     <img
        src={
         process.env.REACT_APP_UPLOAD_URL +
         cat?.attributes?.img?.data?.attributes?.url
       }       
      alt=""
     />
     <button className='cat-btn'>
       <Link className="link" to={`/products/${cat.id}`}>
         {cat.attributes.title}
       </Link>
     </button>
   </div>
   )
           })}
    </div>

  </div>

        
    </div>

    
  )
}

export default Category
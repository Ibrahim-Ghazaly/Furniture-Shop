import React, { useEffect, useRef, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import {  useNavigate } from 'react-router-dom'

import './AddProduct.css'
import useFetch from '../../hooks/useFetch';

import axios from 'axios';


function AddProduct() {

  const token = useSelector(state => state.user.token)
  const userId =useSelector(state => state.user.userId)
  const navigate =useNavigate()
console.log(userId)
console.log(token)


  const {data,loading,error} = useFetch(`${process.env.REACT_APP_API_URL}/categories`)
  const {data:Subcategory,loading:load,error:err} = useFetch(`${process.env.REACT_APP_API_URL}/subcategories`)

  const type = ["normal","featured","trending","bestselling"]


  const [selectedSubCats,setSelectedSubCats]=useState("")
  const [selectedCategory,setSelectedCategory]=useState("")
  const [selectedProductType,setSelectedProductType]=useState("")
  const [image1,setImage1] = useState({})
  const [image2,setImage2] = useState({})
  const [isNew,setIsNew] = useState(false)
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [price,setPrice] = useState(0)

  

  console.log(selectedSubCats)
  console.log(selectedCategory)
  console.log(selectedProductType)
  console.log(image1[0])
  console.log(image2[0])
  console.log(isNew)
  console.log(title)



const creatProduct = async (e)=>{
    
    e.preventDefault();

    const formData = new FormData()

    formData.append('files',image1[0])
    formData.append('files',image2[0])



   await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/upload`,
      headers: {
        Authorization: `Bearer ${token}`,

      },
      data: formData
    }).then((response) => {

       const image1Id = response.data[0].id
      const image2Id = response.data[1].id
      console.log(response)
     
      console.log(image1Id)
      console.log(image2Id)


    axios({
      method:"post",
      url:`${process.env.REACT_APP_API_URL}/products`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
           },
      data:JSON.stringify({data:{
          user:userId,
          title:title,
          desc:description,
          img:image1Id,
          img2:image2Id,
          price:price,
          isNew:isNew,
          categories:[selectedCategory],
          subcategories:[selectedSubCats],
          type:selectedProductType
      }})
    }
      ).then((response)=>{
        console.log(response)
        
        navigate("/shop")

      }).catch((error)=>{
         console.log(error)
        })
    
    }).catch((error)=>{
      console.log(error)
     });


}



  
  const handleCatChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;


    setSelectedCategory(
      isChecked && value
    )
  };

  const handleSubCatChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked && value
        
    );
 
  };

  const handleProductType = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedProductType(
      isChecked && value
        
    );
 
  };


  return (
    <>
    <div className='add-product'>
      <div className='container'>
      <form className="row g-3" onSubmit={creatProduct}>
  <div className="col-12 mt-5">
    <label htmlFor="producTitle" className="form-label">Product Name</label>
    <input type="text" className="form-control" id="producTitle" value={title} required onChange={(e)=> setTitle(e.target.value)}/>
  </div>
  <div className="col-12">
    <label htmlFor="productDesc" className="form-label">Product Description</label>
    <textarea onChange={(e)=> setDescription(e.target.value)} type="text" className="form-control" style={{resize:"none",height:"20vh"}}  id="productDesc" value={description} required/>
  </div>
  <div className="col-12">
    <label htmlFor="price" className="form-label">Price</label>
 
     
      <input onChange={(e)=> setPrice(e.target.value)} type="number" className="form-control" id="price" value={price} aria-describedby="inputGroupPrepend2" required/>

  </div>
  
  <div className='row mt-3'>
    <h3>Category</h3>
    {loading && "...loading"}
    {error && "some thing went wrong"}
  {data?.map((item) => (
            <div className="col-6" key={item.id}>
              <input
                type="radio"
                id={item.id}
                value={item.id}
                name="category"
                onChange={handleCatChange}
              />
              <label className=' mx-2' htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
  </div>

 <div className='row mt-3'>
    <h3>SubCategory</h3>
    {load && "...loading"}
    {err && "some thing went wrong"}
  {Subcategory?.map((item) => (
            <div className="col-6" key={item.id}>
              <input
                type="radio"
                id={item.id}
                value={item.id}
                name="subcategory"
                onChange={handleSubCatChange}
              />
              <label className=' mx-2' htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
  </div> 
   <div className='row mt-3'>
    <h3>Product Type</h3>
  {type.map((item,i) =>
 
  (
     
            <div className="col-6" key={i}>
              <input
                type="radio"
                id={i}
                value={item}
                name="type"
                onChange={handleProductType}
              />
              <label className=' mx-2' htmlFor={i}>{item}</label>
            </div>
          ))}
  </div>  
 
   <div className="col-6">
    <label htmlFor="productimage-1" className="form-label">First Image</label>
    <input type="file" className="form-control" id="productimage-1" required  onChange={(e)=> setImage1(e.target.files)}/>
  </div> 
   
  <div className="col-6">
    <label htmlFor="productimage-2" className="form-label">Second Image</label>
    <input type="file" className="form-control" id="productimage-2" onChange={(e)=> setImage2(e.target.files)} required/>
  </div> 
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="isnew" onChange={(e)=> setIsNew( e.target.checked)} required/>
      <label className="form-check-label" htmlFor="isnew">
        is New
      </label>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit</button>
  </div>
</form>
      </div>
    </div>

    </>
  )
}

export default AddProduct
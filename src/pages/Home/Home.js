import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Slider from '../../components/Slider/Slider'
import './Home.css'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Category from '../../components/category/category'


function Home() {
   
    
  return (

    <>
       <Slider/>
      <FeaturedProducts type ={"featured"}/>
      <Category/>
      <FeaturedProducts type ={"trending"}/>
  

  
    </>
    
   
  )
}

export default Home
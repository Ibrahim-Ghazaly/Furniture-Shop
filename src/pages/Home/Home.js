import React,{useEffect} from 'react'
import Hero from '../../components/Hero/Hero'
import './Home.css'
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Category from '../../components/category/category'


function Home() {
   
    
  return (

    <>
      <Hero/>
      <TrendingProducts /> 
      <Category/>
      <FeaturedProducts/>

  
    </>
    
   
  )
}

export default Home
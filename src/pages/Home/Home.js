import React,{useEffect} from 'react'
import Hero from '../../components/Slider/Hero'
import './Home.css'
import TypedProducts from '../../components/TypedProducts/TypedProducts'
import Category from '../../components/category/category'


function Home() {
   
    
  return (

    <>
      <Hero/>
      <TypedProducts type ={"featured"}/>
      <Category/>
      <TypedProducts type ={"trending"}/>  
  
   

  
    </>
    
   
  )
}

export default Home
import React from 'react';
import heroImg from '../../images/asset1.png'
import './Hero.css'
import { Link } from 'react-router-dom';



//   const fadeImages = ["https://images.pexels.com/photos/6070190/pexels-photo-6070190.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/7031737/pexels-photo-7031737.jpeg?auto=compress&cs=tinysrgb&w=600",
// "https://images.pexels.com/photos/6758245/pexels-photo-6758245.jpeg?auto=compress&cs=tinysrgb&w=600"]

const Hero = () => {
  return (
    <div className="hero">
      <div className='container mt-5'>
        <div className='row gap-5 mt-5'>
        <div className='col'>
          <h1 className='hero-heading mb-5 '>Comfortable Sofa With Great Comfort</h1>
          <p className='hero-content mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
          <Link to="/shop" className='btn hero-btn'>Shop Now</Link>
      </div>
          <div className='col d-none d-lg-block'>
             <img className='hero-image' src={heroImg} alt=""/>
          </div>

        </div>
      </div>
     
    </div>
  )
}

export default Hero
import React, { useEffect, useRef, useState } from "react";

import "./Slider.css";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);



  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };



  return (
    // <div className="slider">
    //   <div className="wrap" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
    //     <img src={data[0]} alt="" />
    //     <img src={data[1]} alt="" />
    //     <img src={data[2]} alt="" />
    //   </div>
    //   <div className="icons">
    //     <div className="icon"  onClick={prevSlide}>
    //     <i className="fi fi-bs-angle-left"></i>
    //     </div>
    //     <div className="icon"   onClick={nextSlide}>
    //     <i className="fi fi-bs-angle-right"></i>
    //     </div>
    //   </div>
    // </div>

    
    <section className="hero" id="home" style={{backgroundImage: `url(${data[2]})`}}>
    <div className="container">

      <div className="hero-content">

        <p className="hero-subtitle">Fashion Everyday</p>

        <h2 className="h1 hero-title">Unrivalled Fashion House</h2>

        <Link className="btn-shop" to="/shop">Shop Now</Link>

      </div>

    </div>
  </section>
  );
};

export default Slider;
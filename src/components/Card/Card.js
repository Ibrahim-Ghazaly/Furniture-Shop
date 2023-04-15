import React, { memo, useEffect, useRef } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'



const Card = ({ item }) => {

  useEffect(()=>{
     
    Aos.init()

  },[])

  return (
    <Link className="link" data-aos="zoom-in-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="300" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default memo(Card);
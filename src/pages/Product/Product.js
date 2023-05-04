import React from "react";
import { useState,useEffect } from "react";
import "./Product.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cart-slice";
import { addToWishlist } from "../../redux/slices/cart-slice";
import axios from "axios";
import TopImage from "../../components/TopImage/TopImage";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const{user}  = useSelector(state => state.user)
  const [data,setData] = useState([])
  const [err,setErr]=useState(null)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(()=>{
    setLoading(true)
    axios.get(`${process.env.REACT_APP_API_URL}/products/${id}?populate=*`)
    .then(res =>  {
     console.log(res.data)
     setLoading(false)
    return setData(res.data)
    }).catch(err => {
     setLoading(false)
     console.log(err)
      return setErr(err)
    })
 },[dispatch])

  return (
    <>
    <TopImage name={"Single Product"}/>
      <div className="product">
      <div className='container'>
    {err && <div class="alert alert-danger" role="alert">{err}</div>}
    {loading && <div className="loader"></div>}
    <>
    <div className="row g-5">
    <div className="col-lg-6 left">
            <div className="images ">
             <img
                src={
                  data?.data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  data?.data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              /> 
            </div>
            <div className="mainImg">
              <img
                src={
                  data?.data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 right">
            <h3>{data?.data?.attributes?.title}</h3>
            <span className="price">${data?.data?.attributes?.price}</span>
            <p>{data?.data?.attributes?.desc}</p>
            <div className="quantity">
              <button className="btn btn-secondary"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button className="btn btn-secondary" onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className=" btn btn-secondary"
              onClick={() =>
                !user.isUser
                  ? navigate("/login", { replace: true })
                  : dispatch(
                      addToCart({
                        id: data.data.id,
                        title: data.data.attributes.title,
                        desc: data.data.attributes.desc,
                        price: data.data.attributes.price,
                        img: data.data.attributes.img.data.attributes.url,
                        quantity,
                      })
                    )
              }
            >
              <i className="fi fi-rr-shopping-cart-add"></i> ADD TO CART
            </button>
            <div className="links">
              <div
                className=" btn btn-primary"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  !user.isUser
                    ? navigate("/login", { replace: true })
                    : dispatch(
                        addToWishlist({
                          id: data.data.id,
                          title: data.data.attributes.title,
                          desc: data.data.attributes.desc,
                          price: data.data.attributes.price,
                          img: data.data.attributes.img.data.attributes.url,
                          quantity,
                        })
                      )
                }
              >
                <i className="fi fi-rs-heart"></i> ADD TO WISH LIST
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div> 
    </div>
       
         </>
      )
    </div>
    </div>

    </>
  
  );
};

export default Product;

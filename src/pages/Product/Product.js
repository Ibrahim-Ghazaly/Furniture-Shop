import React from "react";
import { useState } from "react";
import "./Product.css";
import useFetch from "../../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cart-slice";
import { addToWishlist } from "../../redux/slices/cart-slice";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const token = useSelector((state) => state.user.token);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}/products/${id}?populate=*`
  );

  return (
    <div className="product">
      {loading ? (
       <div className="spinner-grow" role="status">
       <span className="visually-hidden">Loading...</span>
     </div>
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                !token
                  ? navigate("/login", { replace: true })
                  : dispatch(
                      addToCart({
                        id: data.id,
                        title: data.attributes.title,
                        desc: data.attributes.desc,
                        price: data.attributes.price,
                        img: data.attributes.img.data.attributes.url,
                        quantity,
                      })
                    )
              }
            >
              <i className="fi fi-rr-shopping-cart-add"></i> ADD TO CART
            </button>
            <div className="links">
              <div
                className="item"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  !token
                    ? navigate("/login", { replace: true })
                    : dispatch(
                        addToWishlist({
                          id: data.id,
                          title: data.attributes.title,
                          desc: data.attributes.desc,
                          price: data.attributes.price,
                          img: data.attributes.img.data.attributes.url,
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
        </>
      )}
    </div>
  );
};

export default Product;

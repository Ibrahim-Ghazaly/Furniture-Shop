import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { trendingProducts } from "../../redux/slices/product-slice";
import Card from "../Card/Card";
import "./TrendingProducts.css";

function TrendingProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(trendingProducts("trending"));

  }, [dispatch]);

  const { items, isLoading, error } = useSelector(
    (state) => state.products.trendingProducts
  );




  return (
    <>
   <div className="typedproduct">
        <div className="container">
          {error && (
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          {isLoading && <div className="loader"></div>}

          <div className="row mb-5">
            <h2 className="heading">Trending products</h2>
          </div>
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 justify-content-center ">
            {items?.data?.map((product) => {
                return <Card product={product} key={product.id} />;
              })}
          </div>
        </div>
      </div>

    
    </>
  );
}

export default TrendingProducts;

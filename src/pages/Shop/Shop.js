import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/Card/Card";
import "./Shop.css";
import axios from "axios";
import TopImage from "../../components/TopImage/TopImage";

function Shop() {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  let [pageSize, setPageSize] = useState(8);

  let lastPage = data?.data?.meta?.pagination?.pageCount;

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/products?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
      )
      .then((items) => {
        setData(items);
      });
  }, [page]);

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <TopImage name={"Shop"} />
      <div className="featuredProducts">
        <div className="container">
          <div className="row mt-3 ">
            <div className="input-group mb-3">
              <input
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                className="form-control"
                placeholder="search by name of product"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
            </div>
          </div>

          <div className="row rows-col-3 justify-content-center">
            {data?.data?.data
              ?.filter((product) =>
                product.attributes.title.includes(searchValue)
              )
              .map((product) => (
                <Card product={product} key={product.id} />
              ))}
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="controls  ">
                <button
                  className="btn btn-secondary"
                  onClick={handlePrevClick}
                  disabled={page === 1}
                >
                  Previous
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={handleNextClick}
                  disabled={page === lastPage}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;

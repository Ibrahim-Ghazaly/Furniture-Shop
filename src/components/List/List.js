import React from "react";
import "./List.css";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `${ process.env.REACT_APP_API_URL}/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][subcategories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
           {loading && <div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>}
          {error && "some thing went wrong"}
         {data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
// import React, { useEffect } from 'react'
// import "./List.css";
// import { useDispatch ,useSelector} from 'react-redux'
// import Card from "../Card/Card";
// import { getFilterdProducts } from "../../redux/slices/product-slice";
// import axios from 'axios';

// const List = ({ subCats, maxPrice, sort, catId }) => {
//     const dispatch = useDispatch()
  
//   console.log(subCats)
//   console.log(maxPrice)
//   console.log(sort)
//   console.log(catId)

//     useEffect(()=>{
//       dispatch(getFilterdProducts({ subCats, maxPrice, sort, catId}))
//     },[subCats,maxPrice,sort,catId])
  
//     const {items,isLoading,error} = useSelector(state => state.products.filterdProducts)
//     console.log(items)
//     console.log(error)



       
//   return (
//     <div className="list">
//        {error && <div class="alert alert-danger" role="alert">{error}</div>}
//        {isLoading && <div className="loader"></div>}
//          {items?.data?.map((item) => <Card item={item} key={item.id} />)}
//     </div>
//   );
// };

// export default List;
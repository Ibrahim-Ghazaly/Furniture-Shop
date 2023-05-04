import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import TopImage from "../../components/TopImage/TopImage";
import { getFilterdProducts } from "../../redux/slices/product-slice";
import Card from "../../components/Card/Card";




function Products() {

 const catId = useParams().id
 
 const dispatch = useDispatch()

 useEffect(()=>{
  dispatch(getFilterdProducts({catId}))
},[catId])

const {items,isLoading,error} = useSelector(state => state.products.filterdProducts)
console.log(items)
console.log(error)

//  const [maxPrice, setMaxPrice] = useState(1000);
//   const [sort, setSort] = useState("asc");
//   const [selectedSubCats, setSelectedSubCats] = useState([]);
//   const [cat,setCat] = useState([])
// console.log(cat)
    

//     const {categories,isLoading,error} = useSelector(state => state.categories)

//     console.log(categories)
//     console.log(catId)

    // useEffect(()=>{
    //    axios.get(`${process.env.REACT_APP_API_URL}/categories/${catId}?populate=*`)
    //    .then(res =>  {
    //     console.log(res.data)
    //    return setCat(res.data)
    //    }).catch(err => console.log(err))
    // },[dispatch])

    

    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     const isChecked = e.target.checked;
    
    //     setSelectedSubCats(
    //       isChecked
    //         ? [...selectedSubCats, value]
    //         : selectedSubCats.filter((item) => item !== value)
    //     );
    //   };


  return (
    <>
       <TopImage name={"Products"}/>

       <div className="products">
        <div className="container">
        <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 justify-content-center '>

          {items?.data?.map(product =>{
            return  <Card product={product} key={product.id} />
          })
          }
      </div>
            {/* <div className="row">
                <div className="col-2 left">
                
                  <div className="filter-items mb-5">
                  <h3 className="mb-3">Filterd By SubCategories</h3>
                     {/* {categories?.data?.find(cat =>{
                       return   cat.id == catId
                        }) */}
                       {/* {cat?.data?.attributes?.subcategories?.data?.map((item) => (
                            <div className="form-check" key={item.id}>
                              <input
                              className="form-check-input mb-1"
                                type="radio"
                                name="subcategory"
                                id={item.id}
                                value={item.id}
                                onChange={handleChange}
                                 
                              />
                              <label htmlFor={item.id}>{item.attributes.title}</label>
                            </div>
                          ))}
                    
                  </div>
                <div className="filter-item mb-5">
                  <h2>Filter by price</h2>
                  <div className="inputItem">
                    <span>0</span>
                    <input
                      type="range"
                      min={0}
                      max={1000}
                      className="form-range"
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <span>{maxPrice}</span>
                  </div>
                </div>
                <div className="filter-item mb-5">
                  <h2>Sort by</h2>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="asc"
                      value="asc"
                      name="price"
                      className="form-check-input"
                      onChange={(e) => setSort("asc")}
                    />
                    <label htmlFor="asc">Price (Lowest first)</label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      id="desc"
                      value="desc"
                      name="price"
                      className="form-check-input"
                      onChange={(e) => setSort("desc")}
                    />
                    <label htmlFor="desc">Price (Highest first)</label>
                  </div>
                </div>
                </div>
                <div className="col-10">

              <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>

                </div>
            </div> */} 

        </div>
    </div>

    </>
  
  )
}

export default Products
import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Card from '../../components/Card/Card'
import "./Shop.css"
import axios from 'axios'


function Shop() {


    const [searchValue,setSearchValue] = useState("")
   

    const dispatch = useDispatch()


const [data,setData] = useState([])
let [page,setPage] = useState(1)
let [pageSize,setPageSize] = useState(8)



let lastPage = data?.data?.meta?.pagination?.pageCount;


    useEffect(()=>{
      axios.get(`${process.env.REACT_APP_API_URL}/products?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`).then(items => {
        console.log(items)
        setData(items)
        
      })
    },[page])


    const handlePrevClick = () => {
      setPage(page - 1);
    };
  
    const handleNextClick = () => {
      setPage(page + 1);
    };

  return (
    <div className="featuredProducts">
    <div className='container'>
    <div className='searchdiv'>
<div className="input-group mb-3">
  <input onChange={(e)=> setSearchValue(e.target.value)} type="text" className="form-control" placeholder="search by name of product" aria-label="Recipient's username" aria-describedby="button-addon2"/>
</div>

    </div>
  
  <div className="bottom">
    {data?.data?.data?.filter(product => product.attributes
    .title.includes(searchValue)).map((item) => <Card item={item} key={item.id} />)}
      </div>
      </div>
        
      <div className='controls'>
        <button onClick={handlePrevClick} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextClick} disabled={page === lastPage}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Shop
import React from 'react'
import useFetch from '../../hooks/useFetch'
import './FeaturedProducts.css'
import Card from '../Card/Card'

function FeaturedProducts({type}) {
  
  const {data,loading,error} = useFetch(`${ process.env.REACT_APP_API_URL}/products?populate=*&[filters][type][$eq]=${type}`)


  return (
    <div className="featuredProducts">
      <div className='container'>
      
        <div className="top">
      <h1>{type} products</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas.
      </p>
    </div>
    
    <div className="bottom">
    {loading && <div className="spinner-grow" role="status">
  <span className="visually-hidden">Loading...</span>
</div>}
    {error && "some thing went wrong"}
      { data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
    </div>
  
      </div>

  )
}

export default FeaturedProducts
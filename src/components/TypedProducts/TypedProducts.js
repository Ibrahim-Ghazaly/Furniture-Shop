import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { getProducts } from '../../redux/slices/product-slice'
import Card from '../Card/Card'
import './TypedProducts.css'

function TypedProducts({type}) {

  const dispatch = useDispatch()
  
  
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  const {items,isLoading,error} = useSelector(state => state.products.products)
  console.log(items)
  console.log(error)


  return (

    <>
    <div className='typedproduct'>
    <div className='container'>
    {error && <div class="alert alert-danger" role="alert">{error}</div>}
    {isLoading && <div className="loader"></div>}

      <div className='row mb-5'>
        <h2 className='heading'>{type} products</h2>
      </div>
      <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 justify-content-center '>

        {items?.data?.filter(item => item.attributes.type === type)?.map(product =>{
           return  <Card product={product} key={product.id} />
        })
      }
      </div>
     
    </div>
    </div>
   
     
        

    </>
    
  )
}

export default TypedProducts
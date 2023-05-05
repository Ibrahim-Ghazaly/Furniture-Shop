import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { getCategory } from '../../redux/slices/category-slice'
import './category.css'

function Category() {

    const dispatch = useDispatch()
  
  
    useEffect(()=>{
      dispatch(getCategory())
    },[dispatch])
  
    const {categories,isLoading,error} = useSelector(state => state.categories)
    console.log(categories)
    console.log(error)
  

  return (
    <div className='category'>
    <div class="container overflow-hidden text-center">
    
    <div class="row justify-content-center align-items-center">
          <div class="col-12 col-md-3 p-0">
            <Link to={`/products/${categories?.data?.[0].id}`} className="cat-card">  
             <h3 className='py-2 px-4 rounded-2'>{ categories?.data?.[0]?.attributes?.title}</h3>
              <img
                  src={
                  
                    categories?.data?.[0]?.attributes?.img?.data?.attributes?.url
                }       
                alt=""
              />
            </Link>
          </div>
          <div className="col-12 col-md-6 p-0">
          <Link to={`/products/${categories?.data?.[1].id}`} className="cat-card">  
             <h3 className='py-2 px-4 rounded-2'>{ categories?.data?.[1]?.attributes?.title}</h3>
              <img
                  src={
                  
                    categories?.data?.[1]?.attributes?.img?.data?.attributes?.url
                }       
                alt=""
              />
            </Link>
          </div>
          <div className="col-12 col-md-3 p-0">
          <Link to={`/products/${categories?.data?.[2].id}`} className="cat-card">  
             <h3 className='py-2 px-4 rounded-2'>{ categories?.data?.[2]?.attributes?.title}</h3>
              <img
                  src={
                  
                    categories?.data?.[2]?.attributes?.img?.data?.attributes?.url
                }       
                alt=""
              />
            </Link>          </div>
          <div className="col-12  col-md-6 p-0">
          <Link to={`/products/${categories?.data?.[3].id}`} className="cat-card">  
             <h3 className='py-2 px-4 rounded-2'>{ categories?.data?.[3]?.attributes?.title}</h3>
              <img
                  src={
                  
                    categories?.data?.[3]?.attributes?.img?.data?.attributes?.url
                }       
                alt=""
              />
            </Link>          </div>
          <div className="col-12  col-md-6 p-0">
          <Link to={`/products/${categories?.data?.[4].id}`} className="cat-card">  
             <h3 className='py-2 px-4 rounded-2'>{ categories?.data?.[4]?.attributes?.title}</h3>
              <img
                  src={
                  
                    categories?.data?.[4]?.attributes?.img?.data?.attributes?.url
                }       
                alt=""
              />
            </Link>          </div>
        </div>
    </div>
    </div>
  )
}

export default Category
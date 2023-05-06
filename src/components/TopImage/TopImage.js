import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../images/asset 25.jpeg'
import './TopImage.css'

function TopImage({name}) {
  return (
    <>
    <div className='top-image d-flex  align-items-center justify-content-center'>
        <div className='container-fluid '>
            <div className='row text-center '>
             <div className='col d-flex flex-column align-items-center justify-content-center '>
                <h3>{name}</h3>
                 <div className='mt-3'>
                    <Link to="/" className='link mx-2'>Home</Link>/<span>{name}</span>
                 </div>
             </div>
             <div className='col img'>
                <img src={img} alt="" className='image'/>
             </div>
            </div>
        </div>
    </div>
     
    </>
  )
}

export default TopImage
import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'


function Footer() {
  return (
        <>

         <footer className="footer">
        <div className="footer-top bg-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-12 pt-4">
                        <div className="footer-widget">
                        <Link to="/" className="logo mb-5">Woodex</Link>
                            <p className='mb-3'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from</p>
                            <ul className="social-icon d-flex justify-content-start ps-0 mb-3">
                                <li><a href="#"><i className="fi fi-brands-facebook"></i></a></li>
                                <li><a href="#"><i className="fi fi-brands-twitter"></i></a></li>
                                <li><a href="#"><i className="fi fi-brands-linkedin"></i></a></li>
                                <li><a href="#"><i className="fi fi-brands-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 pt-5">
                        <div className="footer-widget">
                            <h3 className='mb-3'>Spacial Menu</h3>
                            <ul className='mb-3 ps-0'>
                                <li><Link to="/" >My Account</Link></li>
                                <li><Link to="/">Checkout</Link></li>
                                <li><Link to="/">Help</Link></li>
                                <li><Link to="/">Support</Link></li>
                                <li><Link to="/">FAQ</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 pt-5">
                        <div className="footer-contact">
                            <h3 className='mb-3'>Contact us</h3>
                            <ul className='mb-3 ps-0'>
                                <li className='mb-2'><i className="fi fi-sr-highlighter mx-2"></i>House No. 09 , Road No.25 Qena,Egypt </li>
                                <li className='mb-2'><i className="fi fi-sr-circle-phone-flip mx-2"></i> <span>01149124073</span> </li>
                                <li className='mb-2'><i className="fi fi-sr-envelope mx-2"></i>ibrahimghazaly88@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-buttom pt-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <p >&copy; All Right Reserved By Ibrahim Ghazaly 2023</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

        </>
  )
}

export default Footer
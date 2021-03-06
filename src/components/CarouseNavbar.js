import React from 'react'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import logo1 from '../images/logo1.jpg'
import lath1 from '../images/lath1.jpg'
import lath2 from '../images/lath2.jpg'
import lath3 from '../images/lath3.jpg'

const CarouseNavbar = () => {
  return (
<>
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container">
    <a className="navbar-brand ml-5 nav-c" href="#">Roket Trades</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">ABOUT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">PLANNED AND PRICING</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">CASE STUDIES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">BLOG</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">CONTACT US</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide-to="0" class="active btn2" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      <img src={lath1} className="d-block w-100" alt="..." width="100%" height="700"/>
      
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={lath2} className="d-block w-100" alt="..." width="100%" height="700"/>
    </div>    
    <div className="carousel-item" data-bs-interval="2000">
      <img src={lath3} className="d-block w-100" alt="..." width="100%" height="700"/>
    </div>
  </div>
  
  <div className="carosel-text">
         <h2>We help the people trade fearlesly, with time tested strategies</h2>
         <ul className="ml-3">
            <li><span className="fa-li"><i className="far fa-check-circle text-danger"></i></span>We understand your market anxiety</li>
            <li><span className="fa-li"><i className="far fa-check-circle text-danger"></i></span>We work with you till you get profit you expected</li>
            <li><span className="fa-li"><i className="far fa-check-circle text-danger"></i></span>We send actionable trade calls you phone by SMS</li>
         </ul>
         <button class="btnhed">View plans and pricing</button>
      </div>
</div> 
</>
  )
}

export default CarouseNavbar

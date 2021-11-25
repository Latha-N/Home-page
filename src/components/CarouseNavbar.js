import React from 'react'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import logo1 from '../images/logo1.jpg'

const CarouseNavbar = () => {
  return (
      <>
    <nav className="navbar navbar-expand-lg  fixed-top ">
        <div className="container">
        <a className="navbar-brand text-white" href="#"><img src={logo1} width="50" height="50"/></a>
        <button className="navbar-toggler" type="button" 
        data-bs-toggle="collapse" data-bs-target="#navbarmenu">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex" id="navbarmenu">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">                   
            <li className="nav-item">
            <a className="nav-link text-white" href="#">HOME</a>
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

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" >
    <div className="carousel-item active" data-bs-interval="500">
      <img src={image1} className="d-block w-100" alt="..." width="100%" height="400"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="500">
      <img src={image2} className="d-block w-100" alt="..." width="100%" height="400"/>
      <div class="carousel-caption d-none d-md-block col-md-3">
        <h5>second slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="500">
      <img src={image3} className="d-block w-100" alt="..." width="100%" height="400"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
  )
}

export default CarouseNavbar

import React from 'react'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import logo1 from '../images/logo1.jpg'

const CarouseNavbar = () => {
  return (
<>
    <nav class="navbar navbar-expand-lg fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">PLANNED AND PRICING</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">CASE STUDIES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">BLOG</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">CONTACT US</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide-to="0" class="active btn2" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="0">
      <img src={image1} className="d-block w-100" alt="..." width="100%" height="400"/>
      <div class="carousel-caption d-none d-md-block top-left">
        
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check border" viewBox="0 0 16 16">
    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
    </svg>jhkn
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="0">
      <img src={image3} className="d-block w-100" alt="..." width="100%" height="400"/>
      <div class="carousel-caption d-none d-md-block top-left">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>    
    <div className="carousel-item" data-bs-interval="0">
      <img src={image3} className="d-block w-100" alt="..." width="100%" height="400"/>
      <div class="carousel-caption d-none d-md-block top-left">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
  

</div> 
</>
      
  //   <nav className="navbar navbar-expand-lg fixed-top bg-dark">
  //       <div className="container">
  //       <a className="navbar-brand text-white" href="#">Roket Trades</a>

  //       <button className="navbar-toggler" type="button" 
  //       data-bs-toggle="collapse" data-bs-target="#navbarmenu">
  //       <span className="navbar-toggler-icon"></span>
  //               <span className="navbar-toggler-icon"></span>

  //       </button>

  //       <div className="collapse navbar-collapse d-flex" id="navbarmenu">
  //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">                   
  //           <li className="nav-item">
  //           <a className="nav-link text-white" href="#">HOME</a>
  //           </li>
  //           <li className="nav-item">
  //           <a className="nav-link text-white" href="#">ABOUT US</a>
  //           </li>
  //           <li className="nav-item">
  //           <a className="nav-link text-white" href="#">PLANNED AND PRICING</a>
  //           </li>
  //           <li className="nav-item">
  //           <a className="nav-link text-white" href="#">CASE STUDIES</a>
  //           </li>
  //           <li className="nav-item">
  //           <a className="nav-link text-white" href="#">BLOG</a>
  //           </li>
  //           <li className="nav-item">
  //           <a className="nav-link text-white" href="#">CONTACT US</a>
  //           </li>
  //       </ul>
  //   </div>
  // </div>
  // </nav>

 
  )
}

export default CarouseNavbar

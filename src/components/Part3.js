import React from 'react'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'
import image7 from '../images/image7.jpg'
import fig1 from '../images/fig1.JPG'
const Part3 = () => {
  return (
    <div className="container-fluid part3">
            <h4 className="text-center text-dark font-weight-bold pt-4 mb-4">ABOUT ROCKET</h4>
            <p className="text-center mb-5">We aim to make stock market trading more reliable.Convenient <br/>and portable for people.</p>
      <div className="row m-4" >
          <div className="col-md-6 " style={{paddingLeft:"50px"}} >
            <img src={image4} width="100%" />
          </div>
          <div className="col-md-6">
            <p>We're a team of passionate,research driven professionls, analysing the market to generate maximum profit oppurtinities for the people.</p>
            <img src={fig1} width="100%"/>
        </div>
        
          <div className="row m-4">
              <div className="col-md-4">
              <div className="card text-white border">
                <img src={image5} class="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <p className="card-text bottom-left">This lead-in to additional content. This content is a little bit longer.<br/><i class="fa fa-tag"></i> sensex, sell timing</p>

                    </div>
                </div>
              </div>
              <div className="col-md-4" >
              <div className="card  text-white border">
                <img src={image5} class="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <p className="card-text bottom-left">This lead-in to additional content. This content is a little bit longer<br/><i class="fa fa-tag"></i> sensex, sell timing</p>

                    </div>
                </div>            
                </div>
              <div className="col-md-4">
              <div className="card  text-white border">
                <img src={image5} class="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <p className="card-text bottom-left">This lead-in to additional content. This content is a little bit longer<br/><i class="fa fa-tag"></i> sensex, sell timing</p>
                    </div>
                </div>              
                </div>
          </div>
      </div>
      </div>
  )
}

export default Part3

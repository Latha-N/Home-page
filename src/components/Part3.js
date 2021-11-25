import React from 'react'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'
import image7 from '../images/image7.jpg'
const Part3 = () => {
  return (
    <div className="container-fluid part3">
            <h2 className="text-center text-dark font-weight-bold pt-4">ABOUT ROCKET</h2>
            <p className="text-center">We aim to make stock market trading more reliable.Convenient <br/>and portable for people.</p>
      <div className="row m-4" >
          <div className="col-md-6 " style={{paddingLeft:"50px"}} >
            <img src={image4} width="100%" />
          </div>
          <div className="col-md-6">
            <p>We're a team of passionate,research driven professionls, analysing the market to generate maximum profit oppurtinities for the people.</p>
        </div>
        
          <div className="row m-4">
              <div className="col-md-4">
                <img src={image5} width="100%"/>
              </div>
              <div className="col-md-4" >
              <img src={image5} width="100%"/>
            </div>
              <div className="col-md-4">
                <img src={image5} width="100%"/>
              </div>
          </div>
      </div>
      </div>
  )
}

export default Part3

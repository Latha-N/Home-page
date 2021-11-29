import React from 'react'
import image8 from '../images/image8.jpg'
import image9 from '../images/image9.jpg'
import image10 from '../images/image10.jpg'
import image11 from '../images/image11.jpg'

const Part4 = () => {
  return (
      <div className="mx-4">
        <h3 className="text-center mt-5 mb-4">CASE STUDIES</h3>
       <p className="text-center mb-5">
           Market lows are normal; make the moves we suggest, rightafter you get our message.<br/> Here are some success stories
       </p>

      <div className="card-group">
                <div className="card bg-dark text-white border">
                <img src={image9} class="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <p className="card-text bottom-left">This lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card bg-dark text-white border">
                <img src={image9} class="card-img" alt="..."/>
                    <div className="card-img-overlay">
                    <div class="card-footer-text">
                           <p class="card-text text-white  bottom-left">New to stock market? start with 3simple steps</p>
                           <p class="card-text text-white text-center">We healped nirav business man from Banglore, a customer since 2010, make money for his new facotory <br/><i class="fal fa-arrow-right"></i></p>

                        </div>
                    </div>
                </div>
                <div className="card bg-dark text-white border">
                <img src={image11} class="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <p className="card-text bottom-left">This is a lead-in to additional content. This content is a little bit longer.</p>
                    </div>

                </div>
                <div className="card bg-dark text-white border">
                <img src={image11} class="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <p className="card-text bottom-left">This is a lead-in to additional content. This content is a little bit longer.</p>
                    </div>

                </div>
                </div>
                </div>

  )
}

export default Part4

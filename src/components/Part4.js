import React from 'react'
import image8 from '../images/image8.jpg'
import image9 from '../images/image9.jpg'
import image10 from '../images/image10.jpg'
import image11 from '../images/image11.jpg'

const Part4 = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center font-weight-bold">CASE STUDIES</h1>
      <p className="text-center">
          Market lows are normal; make the moves we suggest, rightafter you get our message.<br/> Here are some success stories
      </p>
      <div className="row">
          <div className="col-md-3">
            <div className="card bg-dark text-white border">
                <img src={image9} class="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <p className="card-text">This lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
            <div className="card bg-dark text-white border">
                <img src={image11} class="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <p className="card-text">This is a lead-in to additional content. This content is a little bit longer.</p>
                    </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="card bg-dark text-white border">
                <img src={image11} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <p className="card-text">This is a wider caThis content is a little bit longer.</p>
                    </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="card bg-dark text-white border">
                <img src={image9} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <p className="card-text ">This is a This content is a little bit longer.</p>
                    </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Part4

import React from 'react'
import image17 from '../images/image17.jpg'

const Part8 = () => {
  return (
    <div className="container-fluid part3 ">
        <div className="container p-3">
        <h2 className="text-center">TESTIMONIALS</h2>
            <div className="row">
            <div className="col-md-4">
            <div className="card">
                <div class="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                 <img src={image17} width="50" className="imageRadious"/>
                    <h4>DARSHAN ODEYAR</h4>
                        <p>IT professional</p>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card">
                    <div class="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <img src={image17} width="50" className="imageRadious"/>
                        <h4>DARSHAN ODEYAR</h4>
                        <p>IT professional</p>
                    </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <div className="d-flex">
                        <img src={image17} width="50" className="imageRadious"/>
                        <h4>DARSHAN ODEYAR</h4>
                        <p>IT professional</p>

                        </div>
                    </div>
                </div>
            </div>
            </div>
</div>
</div> 
          )
}

export default Part8

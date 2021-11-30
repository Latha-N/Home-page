import React from 'react'
import image17 from '../images/image17.jpg'

const Part8 = () => {
  return (
    <div className="container-fluid part3 ">
        <div className="container p-3">
        <h4 className="text-center">TESTIMONIALS</h4>
            <div className="row m-4">
            <div className="col-md-4">
            <div className="card">
                <div class="card-body">
                    <p className="card-text p-4 font">"With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content."</p>
                 <img src={image17} width="50" className="imageRadious"/><span>DARSHAN ODEYAR</span>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card">
                    <div class="card-body">
                        <p className="card-text p-4 font">"With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content."</p>
                        <img src={image17} width="50" className="imageRadious"/>DARSHAN ODEYAR
                    </div>
            </div>
            </div>
            <div className="col-md-4">
            <div className="card">
                    <div className="card-body">
                        <p className="card-text p-4 font">"With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content."</p>
                        <div className="d-flex">
                        <img src={image17} width="50" className="imageRadious"/>DARSHAN ODEYAR

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

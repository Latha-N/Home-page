import React from 'react'
import fig3 from '../images/fig3.JPG'
import fig2 from '../images/fig2.JPG'
const Part10 = () => {
  return (
    <div className="container-fluid bg-dark text-white pt-3">
        <div className="row">
            <div className="col-md-3 p-2">
              <img src={fig2} width="80%" height="80%"/>
            </div>
            <div className="col-md-3">
                <h3>Contact</h3>
                <p>Behind iti college</p>
                <p>Lanin nagara</p>
                <p>Nittuvalli</p>
                <p>Davangere-577004</p>
                <span  >
                <i className="fa fa-facebook-f p-2"></i>
                <i className="fa fa-google-plus p-2"></i>
                <i className="fa fa-twitter p-2"></i>
                </span>
            </div>
            <div className="col-md-3">
                <h3>Quick Link</h3>
                <p><a>About Us</a></p>
                <p><a>Planned and Pricing</a></p>
                <p><a>Case studies</a></p>
                <p><a>Free trial</a></p>
            </div>
            <div className="col-md-3">
              <img src={fig3} width="80%" height="80%"/>
            </div>
        </div>
        </div>
  )
}

export default Part10

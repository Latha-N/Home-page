import React from 'react'
import fig3 from '../images/fig3.JPG'
import fig2 from '../images/fig2.JPG'
const Part10 = () => {
  return (
    <div className="container-fluid bg-dark text-white pt-5">
        <div className="row">
            <div className="col-sm-3 p-2 mb-4">
              <img src={fig2} width="50%" height="50%"/>
            </div>
            <div className="col-md-3 mb-4">
                <h3>Contact</h3>
                <p>Behind iti college</p>
                <p>Lanin nagara</p>
                <p>Nittuvalli</p>
                <p>Davangere-577004</p>
                <span>
                <i className="fa fa-facebook-f p-2"></i>
                <i className="fa fa-google-plus p-2"></i>
                <i className="fa fa-twitter p-2"></i>
                </span>
            </div>
            <div className="col-md-3 mb-4">
                <h3>Quick Link</h3>
                <p><a>About Us</a></p>
                <p><a>Planned and Pricing</a></p>
                <p><a>Case studies</a></p>
                <p><a>Free trial</a></p>
            </div>
            <div className="col-md-3 mb-4">
            <iframe src="https://www.facebook.com/20531316728/posts/10154009990506729/"
            width="80%" height="200"></iframe>
            </div>
        </div>
        </div>
  )
}

export default Part10

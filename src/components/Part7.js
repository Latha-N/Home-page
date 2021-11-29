import React from 'react'
import image15 from '../images/image15.jpg'
import facebook from '../images/facebook.png'
import twitter1 from '../images/twitter1.png'
import google from '../images/google.png'
const Part7 = () => {
  return (
    <div className="container">
                  <div className="row m-5">
                <h3 className="text-center p-3">FROM THE FOUNDER</h3>
                <div className="col-md-6 mt-3 mb-3">
                    <img src={image15} className="imageRadious" width="50px"/><span className="font-weight-bold">Nilesh, Stock Market Enthusiast</span>
                    <p className="text-wrap mt-4 fst-italic">"Making assumptions that a breakout will occur or that a level <br/>will hold off a further move is 
                        an attempt to predict the market. <br/>Rather, traders should watch ..."</p>
                    <img src={facebook} width="50"/>
                    <img src={twitter1} width="50"/>
                    <img src={google} width="40"/>
                </div>

                <div className="col-md-6 mt-3 mb-3">
                <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY" width="80%" height="200"></iframe>
                </div>
                </div>
                </div>
    </div>
  )
}

export default Part7

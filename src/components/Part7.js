import React from 'react'
import image15 from '../images/image15.jpg'
import facebook from '../images/facebook.png'
import twitter1 from '../images/twitter1.png'
import google from '../images/google.png'
const Part7 = () => {
  return (
    <div className="container">
                  <div className="row">
                <h2 className="text-center p-3">FROM THE FOUNDER</h2>
                <div className="col-md-6">
                    <img src={image15} className="imageRadious" width="50px"/>
                    <p>Nilesh Stock Market Enthusiast</p>
                    <p className="text-wrap">"Making assumptions that a breakout will occur or that a level <br/>will hold off a further move is 
                        an attempt to predict the market. <br/>Rather, traders should watch ..."</p>
                    <img src={facebook} width="50"/>
                    <img src={twitter1} width="50"/>
                    <img src={google} width="40"/>
                </div>

                <div className="col-md-6">
                <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY" width="100%" height="200"></iframe>
                </div>
                </div>
                </div>
    </div>
  )
}

export default Part7

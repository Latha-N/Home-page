import React from 'react'

const Navbar2 = () => {
  return (
    <div className="container">
        <div className="row m-5 text-center">
            <div className="col-md-3">
            <i className="fa fa-thumbs-o-up pt-2" style={{fontSize:"30px"}}></i>
            <h3 className="pt-2">6</h3>
            <hr width="15%" className="text-danger"/>
            <h5>SUCCESSFUL YEARS</h5>
            </div>
            <div className="col-md-3">
            <i class="fa fa-expeditedssl pt-2" style={{fontSize:"30px"}} ></i>
            <h3 className="pt-2">1200</h3>
            <hr width="15%" className="text-danger"/>
            <h5>RELIABLE PREDICTIONS</h5>
            </div>
            <div className="col-md-3">
            <i class="fa fa-bar-chart pt-2" style={{fontSize:"30px"}}></i>
            <h3 className="pt-2">500</h3>
            <hr width="15%" className="text-danger"/>
            <h5>SATISFIED CUSTOMERS</h5>
            </div>
            <div className="col-md-3 ">
            <i class="fa fa-gear pt-2" style={{fontSize:"30px"}}></i>
            <h3 className="pt-2">25</h3>
            <hr width="15%" className="text-danger center"/>
            <h5>EXPECT ADVISORS</h5>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar2

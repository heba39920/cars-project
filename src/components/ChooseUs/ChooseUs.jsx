// import React from 'react'
import audi from "../../assets/assignment-images/imges/landing-page/sec-5/Audi 1.png"


import "./Choose.css"
export default function ChooseUs({children}) {
  return (
    
      <div className="row my-5 py-5 chooseUsBg g-0">
        <div className="col-md-6 ">
          <div className="d-flex flex-column justify-content-center">
            <img className="d-md-block d-none chooseImg" src={audi} alt="car" />
          </div>
          </div>
          <div className="col-md-6">
         
          {children}
           
          </div>
       
      </div>

  )
}

// import React from 'react'
import audi from "../../assets/assignment-images/imges/landing-page/sec-5/Audi 1.png"
import Item from "./Item";
import icon1 from "../../assets/assignment-images/imges/landing-page/Frame 35.png";
import icon2 from "../../assets/assignment-images/imges/landing-page/sec-5/message.png";
import icon3 from "../../assets/assignment-images/imges/landing-page/sec-5/message.png";
import icon4 from "../../assets/assignment-images/imges/landing-page/sec-5/chat.png";

import "./Choose.css"
export default function ChooseUs() {
  return (
    
      <div className="row my-5 py-5 chooseUsBg g-0">
        <div className="col-md-6 ">
          <div className="d-flex flex-column justify-content-center">
            <img className="d-md-block d-none chooseImg" src={audi} alt="car" />
          </div>
          </div>
          <div className="col-md-6">
         
            <div className="row">
              <div className="col">
               <button  className="deals-btn rounded-2 m-4">why choose us</button>
        <h2 className="text-left m-4">We offer the best experience with our rental deals</h2>
                 <Item head='Best price guaranteed' desc='Find a lower price? We’ll refund you 100% of the difference.' img={icon1}/>
                 <Item head='Experience driver' desc='Don’t have driver? Don’t worry, we have many experienced driver for you.' img={icon2}/>
                 <Item head='24 hour car delivery' desc='Book your car anytime and we will deliver it directly to you.' img={icon3}/>
                 <Item head='24/7 technical support' desc='Have a question? Contact Rentcars support any time when you have problem.' img={icon4}/>

              </div>
            </div>
           
          </div>
       
      </div>

  )
}

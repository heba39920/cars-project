import ChooseUs from "../ChooseUs/ChooseUs";
import Item from "../ChooseUs/Item";
import icon1 from "../../assets/assignment-images/imges/landing-page/Frame 35.png";
import icon2 from "../../assets/assignment-images/imges/landing-page/sec-5/message.png";
import icon3 from "../../assets/assignment-images/imges/landing-page/sec-5/message.png";
import icon4 from "../../assets/assignment-images/imges/landing-page/sec-5/chat.png";
import { NavLink } from "react-router-dom";
export default function CarDetails() {
  return <> <nav className="navbar navbar-expand-lg navbar-light fs-5 mx-md-4 mx-1 m-0">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <NavLink className="nav-link active" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link"to="/cars">/ Cars</NavLink>
      </li>
      <li className="nav-item">
      <span className="nav-link disabled" >/ Cars Details</span>
      </li>
      </ul>
      </nav>
  <ChooseUs>
  <div className="row">
  <div className="col">
   <button  className="deals-btn rounded-2 m-4">why choose us</button>
<h2 className="text-left m-4">We offer the best experience with our rental deals</h2>

     <Item  desc='2 Passengers'img={icon1}/>
     <Item  desc='Air conditioning'img={icon2}/>
     <Item desc='CVT'img={icon3}/>
     <Item  desc='Doors'img={icon4}/>

  </div>
</div>
  </ChooseUs>
  </>
}

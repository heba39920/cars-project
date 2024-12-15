import car1 from "../../assets/assignment-images/imges/landing-page/car1.png"
import car2 from "../../assets/assignment-images/imges/landing-page/car2.png"
import car3 from "../../assets/assignment-images/imges/landing-page/car3.png"
import { Link } from "react-router-dom"
import Card from "../Card/Card"
import Section from "../Section/Section"
import "./Popular.css"
export default function Popular() {
    
  return (
     <div className="container">
     <div className="input-group mb-3">
     <span className="input-group-text"><i className="fa-solid fa-location-dot"></i></span>
     <input type="text" className="form-control py-2" placeholder="Search By Name" />
     <button className="input-group-text btn btn-primary">Search</button>
   </div>
      <Section head="POPULAR RENTAL DEALS" title="Most popular cars rental deals">
    <div className="row">

    <Card title="Montero" model="2021" price="$2814.46" img={car1}/>
    <Card title="Passat" model="2021" price="$1731.98" img={car2}/>
    <Card title="L-Series" model="2021" price="$2238.35" img={car3}/>
    <Card title="Compass" model="2021" price="$2732.99" img={car1}/>



    </div>
    <div className="d-flex justify-content-center my-5">
    <Link to="cars"><button  type="button" className="btn btn-outline-secondary px-5"> Show all vehicles 
    <i  className="px-2 fas fa-long-arrow-alt-right"></i></button></Link>
   
    </div>
      </Section>
      
   </div>
    
  )
}

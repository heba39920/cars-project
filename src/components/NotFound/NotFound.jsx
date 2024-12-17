import"./NotFound.css";
import NotFoundImg from "../../assets/assignment-images/imges/not-found/404-not-found.png";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="d-flex justify-content-center vh-100 flex-column align-items-center">
      <img className='NotFound' src={NotFoundImg} alt="not found 404 error" />
    <button className="btn btn-primary"><Link to="home">Home</Link></button>  
     
  </div>
  )
}

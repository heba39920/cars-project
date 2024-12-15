import {NavLink} from "react-router-dom"
import logo from "../../assets/assignment-images/imges/nav/logo.png"
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fs-5 mx-md-4 mx-1 m-0">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="#"><img className="logo" src={logo} alt="" /></NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active me-2" aria-current="page" to="#">Become a rintal</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link me-2" to="#">Rinatal deals</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link me-2" to="#">
            How it work</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link me-2" to="#">
            Why choose us</NavLink>
            </li>
        
        </ul>
        <div className="d-flex justify-content-start">
    
         <button className="btn btn-btn-outline-light fw-normal fs-5">Sign in</button>
         <button className="btn btn-primary fw-normal fs-5">Sign up</button>
             </div>
      </div>
    </div>
  </nav>
  )
}

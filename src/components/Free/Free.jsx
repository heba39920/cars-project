import "./Free.css";
import android from "../../assets/assignment-images/imges/landing-page/andriod.png"
import ios from "../../assets/assignment-images/imges/landing-page/ios.png"
import iphone from "../../assets/assignment-images/imges/landing-page/sec-7/iPhone-14.png";
export default function Free() {
  return (
    <div className="row">
    <div className="col-12">
    <div className="container">
    <div className="row ">
    <div className="d-flex justify-content-around align-items-end">
    <div className="FreeBg my-md-5 mt-3 pt-md-5">
    <h2>Download Rentcars App for <span className="text-primary">FREE </span></h2>
    <small className="fs-5">For faster, easier booking and exclusive deals.</small>
      <div className="row align-items-center justify-content-start flex-nowrap mx-auto my-5">
         <img className="hero-img" src={android} alt="google app store" />
         <img  className="hero-img"  src={ios} alt="apple app store" />
        </div>
    <form><div className="input-group mb-3">
    <input type="text" className="form-control my-0 input " placeholder="Name"/>
    </div>
    <div className="input-group mb-3">
    <input type="text" className="form-control my-0 input" placeholder="Phone Number"/>
    </div>
    <div className="input-group mb-3">
    <input type="text" className="form-control my-0 input" placeholder="Email"/>
    </div>
    <div className="d-flex justify-content-center my-1">
    <button className="btn btn-primary" type="submit">Submit</button>
    </div>
    </form>
    </div>
    <div className="d-flex justify-content-center align-items-end d-md-block d-none mb-0 "><img className="iphone" src={iphone} alt="iphone" /></div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

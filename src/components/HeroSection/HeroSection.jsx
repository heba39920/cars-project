// import React from 'react'
import mainCar from "../../assets/assignment-images/imges/landing-page/car 0.png"
import "./HeroSection.css"
import android from "../../assets/assignment-images/imges/landing-page/andriod.png"
import ios from "../../assets/assignment-images/imges/landing-page/ios.png"

export default function HeroSection() {
  return (

    <div className="row mt-md-5 mt-1 overflow-x-hidden justify-content-sm-center g-0 ">
    <div className="mt-md-5 pt-md-5 col-md-4 order-md-1 order-2 ">
    <div className="text-animation  text-center"> 
    <h1 className="text-animation-heading  fw-md-bolder">Find, book and rent a car <span className="text-animation-span"> Easily</span></h1>
    <p className="text-muted fw-md-bold fs-md-4 fs-6 pe-md-5 ">Get a car wherever and whenever you need it with your IOS and Android device.</p>
    <div className="row align-items-center justify-content-start flex-nowrap m-auto">
     <img className="hero-img" src={android} alt="google app store" />
     <img  className="hero-img"  src={ios} alt="apple app store" />
    </div>
    </div>
   
    </div>
    <div className="col-md-8 order-md-2 order-1 text-end ">
    <img src={mainCar} className="img-animation" alt="main car" />
    </div>
    </div>

  )
}

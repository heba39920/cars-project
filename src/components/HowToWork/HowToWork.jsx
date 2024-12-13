// import React from 'react'
import "./HowToWork.css"
import Section from "../Section/Section";
import SmallCard from "./SmallCard";
import car from "../../assets/assignment-images/imges/landing-page/car-icon.png"
import location from "../../assets/assignment-images/imges/landing-page/location.png"
import calender from "../../assets/assignment-images/imges/landing-page/calender.png"
import nissan from "../../assets/assignment-images/imges/landing-page/nissan.png"
import volvo from "../../assets/assignment-images/imges/landing-page/volvo.png"
import jaguar from "../../assets/assignment-images/imges/landing-page/jaguar.png"
import audi from "../../assets/assignment-images/imges/landing-page/audi.png"
import ac from "../../assets/assignment-images/imges/landing-page/ac.png"

export default function HowToWork() {
  return (
  <div className="container">
  <Section head="HOW IT WORK" title="Rent with following 3 working steps">
  <div className="row">
    <SmallCard heading="Choose location" desc="Choose your and find your best car" img={location} />
    <SmallCard heading="Pick-up date" desc="Select your pick up date and time to book your car" img={calender} />
    <SmallCard heading="Book your car" desc="Book your car and we will deliver it directly to you" img={car} />

  </div>


  <div className="row">
    <div className="my-5">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">


            <div className="row justify-content-center">
              <div className="col-md-2 col-sm-2"> <img src={nissan} className="w-75 h-75" alt="nissan" /></div>
              <div className="col-md-2 col-sm-2"><img src={jaguar} className="w-75 h-75" alt="jaguar" /></div>
              <div className="col-md-2 col-sm-2"><img src={volvo} className="w-75 h-75" alt="volvo" /></div>
              <div className="col-md-2 col-sm-2"><img src={audi} className="w-75 h-75" alt="audi" /></div>
              <div className="col-md-2 col-sm-2"><img src={ac} className="w-75 h-75" alt="ac" /></div>
              <div className="col-md-2 col-sm-2"><img src={volvo} className="w-75 h-75" alt="volvo" /></div>


            </div>


          </div>
          <div className="carousel-item">
            <div className="row justify-content-between">
              <div className="col-md-2 col-sm-2"> <img src={nissan} className="w-75 h-75" alt="nissan" /></div>
              <div className="col-md-2 col-sm-2"><img src={jaguar} className="w-75 h-75" alt="jaguar" /></div>
              <div className="col-md-2 col-sm-2"><img src={volvo} className="w-75 h-75" alt="volvo" /></div>
              <div className="col-md-2 col-sm-2"><img src={audi} className="w-75 h-75" alt="audi" /></div>
              <div className="col-md-2 col-sm-2"><img src={ac} className="w-75 h-75" alt="ac" /></div>
              <div className="col-md-2 col-sm-2"><img src={volvo} className="w-75 h-75" alt="volvo" /></div>


            </div>

          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</Section>
  </div>
  )
}

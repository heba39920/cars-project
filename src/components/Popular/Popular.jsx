// import React from 'react'
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
    <div className="col-md-3">
    <Card/>
    </div>
    </div>
    <div className="d-flex justify-content-center my-5">
    <Link to="cars"><button  type="button" className="btn btn-outline-secondary px-5"> Show all vehicles 
    <i  className="px-2 fas fa-long-arrow-alt-right"></i></button></Link>
   
    </div>
      </Section>
      
   </div>
    
  )
}

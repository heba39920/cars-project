// import React from 'react'
// import Card from "../Card/Card"
// import axios from "axios";
// import { useEffect, useState } from "react"
import { Outlet, NavLink } from "react-router-dom";



export default function Cars() {
//   const [cars, setCars] = useState([]);
//   const getCars = async ()=>{
//     try {
//       let response = await axios.get("https://myfakeapi.com/api/cars/");
//       console.log(response);
      
//       setCars(response?.data);
//       console.log(cars);
      
//     } catch (error) {
//       console.log(error);
      
//     }
//   }
//   useEffect(()=>{
//     getCars();
//   })
  return (<>
    <nav>
    <ul>
    <li><NavLink to="home">Home / </NavLink>
    </li>
    <li><NavLink to="cars"> Cars</NavLink></li>
    </ul>
    </nav>
   <Outlet/>
   </>
  )
}

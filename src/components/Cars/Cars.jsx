// import React from 'react'
// import Card from "../Card/Card"
import axios from "axios";
import { useEffect, useState } from "react"


export default function Cars() {
  const [cars, setCars] = useState([]);
  const getCars = async ()=>{
    try {
      let response = await axios.get("https://myfakeapi.com/api/cars/");
      console.log(response);
      
      setCars(response?.data);
      console.log(cars);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    getCars();
  })
  return (
   <></>
  )
}

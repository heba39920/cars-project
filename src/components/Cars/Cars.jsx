import React from 'react'
import Card from "../Card/Card"
import axios from "axios";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import car1 from "../../assets/assignment-images/imges/landing-page/car1.png"
import car2 from "../../assets/assignment-images/imges/landing-page/car2.png"
import car3 from "../../assets/assignment-images/imges/landing-page/car3.png"
const imgs = [car1,car2,car3];

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);  
  const [itemsPerPage] = useState(16);
  const getCars = async ()=>{
    try {
      let response = await axios.get("https://myfakeapi.com/api/cars/");
      setCars(response?.data.cars);
 
    
      
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    getCars();
  },[]); 
 
  const totalPages = Math.ceil(cars.length/itemsPerPage);
  const indexOfLastCar = currentPage * itemsPerPage;
  const indexOfFirstCar = indexOfLastCar - itemsPerPage;
  const currentCars = cars.slice(indexOfFirstCar,indexOfLastCar)
  const handlePageChange = (pageNumber) => {  
    setCurrentPage(pageNumber);  
  }; 


  const getPaginationTabs = () => {  
    const tabs = [];  
    const tabCount = 6; // Total tabs to display  
    const halfTabCount = Math.floor(tabCount / 2);  

    let start = Math.max(1, currentPage - halfTabCount);  
    let end = Math.min(totalPages, start + tabCount - 1);  

    // Adjust start if we don't have enough pages at the end  
    if (end - start < tabCount - 1) {  
      start = Math.max(1, end - tabCount + 1);  
    }  

    for (let i = start; i <= end; i++) {  
      tabs.push(i);  
    }  

    return tabs;  
  };  

  const paginationTabs = getPaginationTabs();  
  return (
   
    <>
    <nav className="navbar navbar-expand-lg navbar-light fs-5 mx-md-4 mx-1 m-0">
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
    <li className="nav-item">
    <NavLink className="nav-link active" to="/">Home</NavLink>
    </li>
    <li className="nav-item">
    <span className="nav-link disabled">/ Cars</span>
    </li>
    </ul>
    </nav>
<div className='container-lg container-fluid'>
<div className='d-flex flex-wrap justify-content-center align-items-center'>
{currentCars.map((car,index)=>{
  return    <Card key={car.id} title={car.car} model={car.car_model} price={car.price}  img={imgs[index % imgs.length]}/>
 
})} 
<nav aria-label="Page navigation example">  
        <ul className="pagination">  
          <li className="page-item">  
            <button  
              className="page-link"  
              onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}  
              disabled={currentPage === 1}  
            >  
              Previous  
            </button>  
          </li>  
          {paginationTabs.map((page) => (  
            <li className="page-item" key={page}>  
              <button  
                className="page-link"  
                onClick={() => handlePageChange(page)}  
                style={{  
                  fontWeight: currentPage === page ? 'bold' : 'normal',  
                }}  
              >  
                {page}  
              </button>  
            </li>  
          ))}  
          <li className="page-item">  
            <button  
              className="page-link"  
              onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}  
              disabled={currentPage === totalPages}  
            >  
              Next  
            </button>  
          </li>  
        </ul>  
      </nav>   
    
</div>
</div>

</>
  )
}

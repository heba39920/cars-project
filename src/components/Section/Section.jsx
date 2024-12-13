/* eslint-disable react/prop-types */
// import React from 'react'

export default function Section({head, title ,children}) {

  return (
 
   
 <>
    <div  className="d-flex justify-content-center m-4">
    <button  className="deals-btn rounded-2"> {head} </button>
    </div>
    <h1 className="text-center m-4">{title}</h1>
    {children}
    </>
     
  )
}

/* eslint-disable react/prop-types */
// import React from 'react'

export default function SmallCard({img,heading,desc}) {
  return (
  <div className="col-md-4">
  <div className="d-flex flex-column align-items-center px-4 mx-4 my-2 _deals_iny2y_8">
  <div>
  <img src={img} alt="" />
  </div>
  <h5 className="my-2">{heading}</h5>
  <small className="text-muted text-center">{desc}</small>
  </div>
  </div>
  )
}

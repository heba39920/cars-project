

import { NavLink } from "react-router-dom"

export default function Card({title, model, price,img}) {
  return (
<div className=" col-lg-3 col-md-6 col-sm-12">
<div className="card mb-4" style={{ width: "18rem" }}>  
<img src={img} className="card-img-top" alt={title} />  
<div className="card-body">  
  <h5 className="card-title">{title}</h5>  
  <div className="d-flex align-items-center">  
    <i className="fa-solid fa-star text-warning"></i>  
    <small className="text-muted ms-2">(1345 reviews)</small>  
  </div>  
  <div className="d-flex justify-content-between mt-2">  
    <div className="flex-grow-1">  
      <p className="card-text text-nowrap">  
        <small className="text-muted">2 Passengers</small>  
      </p>  
      <p className="card-text text-nowrap">  
        <i className="fa-solid fa-calendar-days me-2"></i>  
        <small className="text-muted">{model}</small>  
      </p>  
    </div>  
    <div className="flex-grow-1">  
      <p className="card-text text-nowrap">  
        <small className="text-muted">Air Conditioning</small>  
      </p>  
      <p className="card-text text-nowrap">  
        <small className="text-muted">Automatic</small>  
      </p>  
    </div>  
  </div>  
  <hr />  
  <div className="d-flex justify-content-between">  
    <span className="text-muted">Price</span>  
    <span className="d-flex align-items-center">  
      <h6 className="mb-0">{price}</h6>  
      <span className="text-muted"> / day</span>  
    </span>  
  </div>  
<NavLink to="carsDetails">  <button className="btn btn-primary mt-3 w-100" role="button">View details <i className="fas fa-long-arrow-alt-right px-2"></i></button>  
</NavLink>
</div>  
</div>  
</div> 
  )
}

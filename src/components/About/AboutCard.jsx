/* eslint-disable react/prop-types */
import "./About.css"

export default function AboutCard({img}) {
  return (
    <div className="card mb-3 mx-2 shadow">
    <div className="row g-0">
    <div className="col-md-6">
    <img src={img} className="img-fluid rounded-start w-100 h-100 object-fit-cover"  alt="person" />
    </div>
    <div className="col-md-6">
    <div className="card-body">
    <h1  className="card-title mb-0">5.5 <small className="h5">stars</small></h1>
    <div className="d-flex text-warning">
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    <i className="fa-solid fa-star"></i>
    </div>
    <p className="card-text fs-5 my-1">I feel very secure when using caretall s services. Your customer care team is very enthusiastic and the driver is always on time.</p>
    <div className="card-text"><p className="bold mb-0">Charlie Johnson</p><small className="text-muted">Last updated 3 mins ago</small></div>
    </div>
    </div>
    </div>
    </div>
  )
}

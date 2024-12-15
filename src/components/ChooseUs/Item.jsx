 
import "./Choose.css"

export default function Item({head,desc , img}) {
  return (
    <div className="d-flex justify-content-start align-items-center mt-md-5 px-md-4 px-2 mx-md-4 my-2">
   
    <img className="me-md-3 ms-2 chooseUsIcon" src={img} alt="icon" />
    <div className=" mx-4">
    <h6 className="fs-md-6 fs-4 my-0">{head}</h6>
    <small className="my-0 text-muted text-center">{desc}</small>
    </div>
    </div>
  )
}

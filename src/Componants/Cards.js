import React from 'react'
import { NavLink } from "react-router-dom";
function Cards(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card" >
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h3 className="card-title devjoshi font-weight-bold">{props.title}</h3>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="" className="btn btn-outline-primary">Go somewhere</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
export default Cards;

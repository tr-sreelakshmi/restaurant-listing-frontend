import React from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Review({rev ,name, ...props }) {
    console.log(rev);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <p variant="primary" onClick={handleShow} className="me-2">
    {name}Review
  </p>
  <Offcanvas show={show} onHide={handleClose} {...props}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Reviews</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      {
      rev?.map((item)=>(
         <div style={{border:" 2px solid beige", margin:"8px", padding:"10px"}}>
          <p>Name: {item.name}</p>
        <p>Rating: {item.rating} <i class="fa-solid fa-star fa-beat" style={{color: "#f1a809"}}></i></p>
        <p>Date: {item.date}</p> 
        <p>Comments: {item.comments}</p>
        </div>
          ))
      }
    </Offcanvas.Body>
  </Offcanvas>
</div>
  )
}

export default Review
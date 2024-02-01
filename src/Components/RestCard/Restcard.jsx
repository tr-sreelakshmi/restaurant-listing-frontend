import React from 'react'
import '../RestCard/Restcard.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


  function Restcard({restaurants}) {
    console.log(restaurants);

  return (
    <div>
        <Link to={`view/${restaurants.id}`}>
        <MDBCard className='card' style={{height:"550px"}}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={restaurants.photograph} fluid alt='...' />
      
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        
      </MDBRipple>
      <MDBCardBody >
       <div  >
            <MDBCardTitle className='head'>{restaurants.name}</MDBCardTitle>
            <MDBCardText style={{textDecoration:"none"}} className='text'  >
           Address: {restaurants.address} <br/>
           Cuisine Type: {restaurants.cuisine_type}
            </MDBCardText>
       </div>
      </MDBCardBody>
    </MDBCard>
        </Link>
      
    </div>
  )
}

export default Restcard
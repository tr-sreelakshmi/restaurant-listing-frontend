import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
    <MDBNavbar dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>
        <i class="fa-solid fa-utensils fa-flip me-2"></i>

          Resto Cafe
        </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
  </div>  )
}

export default Header
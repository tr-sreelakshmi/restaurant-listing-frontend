import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
  import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
  

function RestOp({op}) {
    console.log(op); //time details 

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
   <p variant="primary" onClick={handleShow}>
       Operation Hours
      </p>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* List */}
        <MDBListGroup style={{ minWidthL: '22rem' }} light>
      <MDBListGroupItem>Monday : {op?.Monday} </MDBListGroupItem>
      <MDBListGroupItem>Tuesday : {op?.Tuesday}</MDBListGroupItem>
      <MDBListGroupItem>Wednesday : {op?.Wednesday}</MDBListGroupItem>
      <MDBListGroupItem>Thursday : {op?.Thursday}</MDBListGroupItem>
      <MDBListGroupItem>Friday : {op?.Friday}</MDBListGroupItem>
      <MDBListGroupItem>Saturday : {op?.Saturday}</MDBListGroupItem>
      <MDBListGroupItem>Sunday : {op?.Sunday}</MDBListGroupItem>

    </MDBListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
  </div>
  )
}

export default RestOp



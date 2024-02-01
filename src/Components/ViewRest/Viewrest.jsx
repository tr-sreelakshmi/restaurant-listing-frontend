import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  axios  from "axios";
import { Col ,Image,Row } from 'react-bootstrap';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import RestOp from '../Restop/RestOp';
import Review from '../Review/Review';



function Viewrest() {

    const baseurl = "https://restaurant-listing-backend.onrender.com";
 // 1. to get particular id from  url- useparams
    // const pathparams = useParams()
   // console.log(pathparams.id);
   //destructuring using id from 
   
const {id} = useParams()
console.log(id);

// 3. create a state for holding resturnt detial
const [restDetail , SetRestDetail] = useState([])
// 2. make an api call to fetch particular resturant deatils
const fetchdata = async()=>{
    const {data} = await axios.get(`${baseurl}/restaurants/${id}`)
    console.log(data);
    SetRestDetail(data)
}

console.log(restDetail);

useEffect(()=>{
    fetchdata()
},[])


  return (
    <>
{
    restDetail?
    <Row>
    
     <Col>
<Image src={`${restDetail.photograph}`} fluid style={{height:"500px" ,width:"450px",  padding:'20px' ,border:"2px solid beige"}}/>
   </Col>
   

   <Col style={{padding:"50px" }}>
    <h1 className='text-center mt-3'>{restDetail.name}</h1>
   <MDBListGroup style={{ minWidth: '22rem' , border:"2px solid beige" }} light>
      <MDBListGroupItem tag='button' action noBorders    type='button' className='px-3' >
        Cuisine Type :{restDetail.cuisine_type}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders   type='button' className='px-3'>
      Address : {restDetail.address}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
      Neighborhood :{restDetail.neighborhood}
      </MDBListGroupItem>
     
      <MDBListGroupItem tag='button' action noBorders  type='button' className='px-3'>
      <RestOp  op={restDetail.operating_hours}/>
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>
     <Review  rev= {restDetail.reviews}/>
      </MDBListGroupItem>
    </MDBListGroup>
   </Col>
</Row>  : <p>No data</p>
}
    </>
  )
}

export default Viewrest
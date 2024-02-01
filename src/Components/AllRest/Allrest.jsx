import React, { useEffect, useState } from 'react'
import   { Row,Col }  from 'react-bootstrap';
import  axios  from "axios";
import Restcard from '../RestCard/Restcard'


function Allrest() {

  const baseUrl ="https://restaurant-listing-backend.onrender.com";
  const [allRest,setAllRest]=useState([])

  const fetchData=async()=>{
    const {data} =await axios.get(`${baseUrl}/restaurants`)
    console.log(data);
    setAllRest(data)
 } 
 console.log(allRest);

 useEffect(() => {
  fetchData();
   
 }, [])
 

  return (

<>
<Row>
  {
    allRest.map((item)=>(
    <Col  sm={12} md={6} lg={4} xl={3}  className='my-3'>
    <Restcard restaurants={item}/>
    </Col>
    
      ) )
  }
</Row>
</>    )
}

export default Allrest
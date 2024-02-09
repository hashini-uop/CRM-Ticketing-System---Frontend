import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import tickets from '../../assests/data/dummy-tickets.json'
import { MessageHistory } from '../../components/history/history'
import { UpdateTicket } from '../../components/updateTicket/updateTicket'
import { useParams } from 'react-router-dom'
import './ticket.css'

const ticket = tickets[0]
export const Ticket = () => {
  const {tId} = useParams();
  const [message, setMessage] = useState('');
  //const [ticket, setTicket] = useState('');
//   useEffect(() => {
//     for (let i=0; i<tickets.length; i++){
//       if(tickets[i].id == tId){
//         setTicket(tickets[i])
//         continue;
//       }
//     }
// }, [message. tId]);

useEffect(() => {}
  
, [message]);

  const handleOnChange = e => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () =>{
    alert("Submitted")
  }
  return (
    <div className='ticket'>
      <Row className='row'>
        <Col className='col'>
        
        
         <div className='subject'>Subject: {ticket.subject}</div>
         <div className='date'>   Date:   {ticket.addedAt}</div>
         <div className='status'>Status:  {ticket.status}</div>
        </Col>
       <Col className='button'>
        <Button className='btn'>Close Ticket</Button>
       </Col> 
      </Row>
      <Row>
        <Col>
        {ticket.history &&  <MessageHistory msg={ticket.history} /> }
        
        </Col>
      </Row>
      <hr />

      <Row>
        <Col>
         <UpdateTicket msg={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/></Col>
      </Row>
    </div>
  )
}

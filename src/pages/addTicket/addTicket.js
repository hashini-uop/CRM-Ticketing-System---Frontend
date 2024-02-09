import React from 'react'
import { TicketForm } from '../../components/ticketForm/ticketForm'
import { Col, Container, Row } from 'react-bootstrap'

const AddTicket = () => {
  return (
    <Container>
    <Row>
        <Col>
         <TicketForm />
        </Col>
    </Row>
</Container>
)

}

export default AddTicket
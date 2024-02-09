import React from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import './ticketForm.css'

export const TicketForm = ({handleOnSubmit,handleOnChange}) => {
  return (
    <Container>
      <h1 className='title'>Add New Ticket</h1>
        <Row>
            <Col>
            <Form autoComplete="off" onSubmit={handleOnSubmit} className='form'>
              <Form.Group>
                <Form.Label className="label">Subject</Form.Label>
                <Form.Control
                  name="subject"
                  onChange={handleOnChange}
                  placeholder="Enter Subject"
                  minLength={3}
                  required
                ></Form.Control>
              </Form.Group>

              <Form.Group >
                <Form.Label  className="label">Issue found Date</Form.Label>
                <Form.Control 
                  type="date"
                  name="issuedate" 
                  onChange={handleOnChange}
                  placeholder="Enter date"
                  required
                ></Form.Control>
              </Form.Group>

              
              <Form.Group>
                <Form.Label className="label">Details</Form.Label>
                <Form.Control as="textarea"
                  name="details"
                  onChange={handleOnChange}
                  placeholder="Enter details"
                  required
                ></Form.Control>
              </Form.Group>

              <Button className="btn" type="submit">
                Add New Ticket
              </Button>
            </Form>

            </Col>
        </Row>
    </Container>
  )
}

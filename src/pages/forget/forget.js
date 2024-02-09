import React, { useState } from 'react'

import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import './forget.css'

const Forget = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState('reset');
  const formSwich = (formtype) => {
    setLoad(formtype);
  };

  const handleOnChange = e => {
    const {name,value} = e.target

    switch(name){
      case 'email':
        setEmail(value)
        break

      case 'password':
        setPassword(value)
        break
    
        default:
        break    
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault()

    if(!email || !password){
      return alert("Fill up all!")
    }
    //api call
  }
  return (
    <div className='log-card'>
        <div className='form'>
          <Container>
            <Row>
              <Col>
                <h1>Reset Password</h1>
                <hr/>
              </Col>
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                  <Form.Group>
                    <Form.Label className='label'>Email Address</Form.Label>
                    <Form.Control
                    type='email'
                    name='name'  
                    onChange={handleOnChange}
                    placeholder='Enter Email'
                    required
                    ></Form.Control>
                  </Form.Group>

                  {/* <Button className='btn' type='submit'>Submit</Button> */}
                </Form>
            </Row>

            <Row>
              <Col>
                <Button href='/login' onClick={() =>formSwich('login')}>Log In</Button>
              </Col>
            </Row>
          </Container>
        </div>  
    </div>
    
  )
}

export default Forget
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Proptypes from 'prop-types'

export const UpdateTicket = ({msg, handleOnChange, handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label className='reply'>Reply</Form.Label>
        
        <Form.Control
        name=""
        value={msg}
        onChange={handleOnChange}
        placeholder='Please send us a message or update the ticket.'
        as="textarea"
        row="5"
        name='detail'/>
    <Button className='btn' type='submit'>Reply</Button>
    </Form>
  )
}

UpdateTicket.propTypes = {
    handleOnChange: Proptypes.func.isRequired,
    handleOnSubmit: Proptypes.func.isRequired,
    msg: Proptypes.string.isRequired,
}
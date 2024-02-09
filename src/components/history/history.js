import React from 'react'
import Proptypes from 'prop-types'
import './history.css'

export const MessageHistory = ({msg}) => {
  if (!msg)  return null  ;
  return msg.map((row, i) => (
    <div key={i} className='message-history'>
        <div className='send'>
            <div className='sender'>{row.messageBy} </div>
            <div className='date'>{row.date} </div>
            <div className='message'>{row.message} </div>
        </div>
    </div>
    ));
  
};

MessageHistory.propTypes = {
    msg: Proptypes.array.isRequired,
}

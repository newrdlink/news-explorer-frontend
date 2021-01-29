import React from 'react';
import './MarkMessage.css'

const MarkMessage = ({ message }) => {
  return (
    <span className="message">{message}</span>
  )
}

export default MarkMessage;

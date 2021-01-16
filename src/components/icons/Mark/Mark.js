import React from 'react';
import './Mark.css';

const Mark = ({ isOver, isMarked }) => <svg className="mark">
  <path
    d="M11.3822 15.7137L6 19.9425V4L18 4V19.9425L12.6178 15.7137L12 15.2283L11.3822 15.7137Z"
    stroke={isOver ? "#1A1B22" : (isMarked ? "#2F71E5" : "#B6BCBF")}
    strokeWidth="2"
    fill={isMarked ? "#2F71E5" : "none"} />
</svg>

export default Mark;

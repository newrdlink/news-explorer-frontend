import React from 'react';
import './Basket.css';

const Basket = ({ isOver }) => <svg className="basket">
  <path
    d="M12 0H6V2H0V4H18V2H12V0ZM2 
    6V17C2 18.1046 2.89543 19 4 
    19H14C15.1046 19 16 18.1046 16 17V6H14V17H4V6H2ZM6 
    6L6 15H8L8 6H6ZM10 6V15H12V6H10Z"
    fill={isOver ? "#1A1B22" : "#B6BCBF"} />
</svg>

export default Basket;

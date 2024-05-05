import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/button.css"

const Button = ({ to, text }) => {
  return (
    <Link to={to}>
      <button className='custom-button'>
        {text}
      </button>
    </Link>
  );
};

export default Button;

import React from 'react';
import './index.css';

function Burger({ handleClick }) {
  return (
    <button
      type='button'
      className='burger d-flex flex-column justify-content-around align-self-center bg-transparent z-1'
      onClick={handleClick}
    >
      <div className='burger-line position-relative bg-secondary rounded-4' />
      <div className='burger-line position-relative bg-secondary rounded-4' />
      <div className='burger-line position-relative bg-secondary rounded-4' />
    </button>
  );
}

export default Burger;

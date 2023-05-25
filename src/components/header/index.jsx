import React, { useState } from 'react';
import Burger from './burger';
import NavMenu from './nav-menu';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className='sticky-top bg-white py-3'>
      <Burger handleClick={handleShow} />
      <NavMenu show={show} handleClick={handleClose} />
    </header>
  );
}

export default Header;

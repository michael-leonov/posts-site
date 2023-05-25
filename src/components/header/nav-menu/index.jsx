import React from 'react';
import { Offcanvas, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ABOUT_ROUTE, HOME_ROUTE } from '../../../utils/consts';
import userPlug from '../../../assets/static/user-plug.png';

function NavMenu({ show, handleClick }) {
  return (
    <Offcanvas show={show} onHide={handleClick}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <img src={userPlug} alt='' width={50} height={50} />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <p>Михаил</p>
        <p className='mb-4'>michael.leonov96@mail.ru</p>
        <Stack gap={2}>
          <Link
            to={HOME_ROUTE}
            onClick={handleClick}
            className='p-0 text-decoration-none'
          >
            Список постов
          </Link>
          <Link
            to={ABOUT_ROUTE}
            onClick={handleClick}
            className='p-0 text-decoration-none'
          >
            Обо мне
          </Link>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default NavMenu;

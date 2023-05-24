import React from 'react';
import { Stack } from 'react-bootstrap';
import './index.css';

function NotFound() {
  return (
    <Stack className='align-items-center justify-content-center text-center px-4 flex-column flex-sm-row'>
      <h1 className='tracking-tight pe-sm-4 me-sm-4 border-sm-right'>404</h1>
      <h2 className='mt-2 fs-4 mt-sm-0'>Страница не найдена.</h2>
    </Stack>
  );
}

export default NotFound;

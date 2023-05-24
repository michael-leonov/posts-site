import React from 'react';
import { Spinner } from 'react-bootstrap';

function LoadingSpinner({ children, animation, as, role, size, variant }) {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ width: '100%', height: '90vh' }}
    >
      <Spinner
        as={as}
        animation={animation}
        role={role}
        size={size}
        variant={variant}
      >
        {children}
      </Spinner>
    </div>
  );
}

export default LoadingSpinner;

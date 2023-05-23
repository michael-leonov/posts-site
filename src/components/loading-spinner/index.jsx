import React from 'react';
import { Spinner } from 'react-bootstrap';

function LoadingSpinner({ children, animation, as, role, size, variant }) {
  return (
    <Spinner
      as={as}
      animation={animation}
      role={role}
      size={size}
      variant={variant}
    >
      {children}
    </Spinner>
  );
}

export default LoadingSpinner;

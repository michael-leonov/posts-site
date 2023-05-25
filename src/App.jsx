import React from 'react';
import { Container } from 'react-bootstrap';
import AppRoutes from './routes';
import Header from './components/header';

function App() {
  return (
    <Container>
      <Header />
      <AppRoutes />
    </Container>
  );
}

export default App;

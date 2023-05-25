import React from 'react';
import { Badge } from 'react-bootstrap';

function About() {
  return (
    <div>
      <h1 className='mb-2'>Обо мне</h1>
      <h2 className='mb-3'>Стек</h2>
      <div className='d-flex flex-wrap mb-4'>
        <h3 className='mb-1'>Frontend: </h3>
        <Badge className='m-1' bg='primary'>
          HTML
        </Badge>
        <Badge className='m-1' bg='primary'>
          CSS
        </Badge>
        <Badge className='m-1' bg='primary'>
          SCSS
        </Badge>
        <Badge className='m-1' bg='primary'>
          TailwindCSS
        </Badge>
        <Badge className='m-1' bg='primary'>
          Styled-components
        </Badge>
        <Badge className='m-1' bg='primary'>
          JS
        </Badge>
        <Badge className='m-1' bg='primary'>
          React
        </Badge>
        <Badge className='m-1' bg='primary'>
          React-Query
        </Badge>
        <Badge className='m-1' bg='primary'>
          TypeScript
        </Badge>
        <Badge className='m-1' bg='primary'>
          Redux
        </Badge>
        <Badge className='m-1' bg='primary'>
          Redux Thunk
        </Badge>
        <Badge className='m-1' bg='primary'>
          Redux Toolkit + RTK Query
        </Badge>
        <Badge className='m-1' bg='primary'>
          Redux Saga
        </Badge>
        <Badge className='m-1' bg='primary'>
          Axios
        </Badge>
        <Badge className='m-1' bg='primary'>
          Jest
        </Badge>
      </div>
      <div className='d-flex flex-wrap mb-4'>
        <h3 className='mb-1'>Backend: </h3>
        <Badge className='m-1' bg='primary'>
          NodeJs
        </Badge>
        <Badge className='m-1' bg='primary'>
          Express
        </Badge>
      </div>
      <div className='d-flex flex-wrap mb-4'>
        <h3 className='mb-1'>Database: </h3>
        <Badge className='m-1' bg='primary'>
          MongoDB
        </Badge>
        <Badge className='m-1' bg='primary'>
          MySQL
        </Badge>
      </div>
      <div className='d-flex flex-wrap mb-4'>
        <h3 className='mb-1'>Bundler: </h3>
        <Badge className='m-1' bg='primary'>
          Webpack
        </Badge>
      </div>
      <div className='d-flex flex-wrap mb-4'>
        <h3 className='mb-1'>CMS: </h3>
        <Badge className='m-1' bg='primary'>
          WordPress
        </Badge>
        <Badge className='m-1' bg='primary'>
          1C-Bitrix
        </Badge>
      </div>
    </div>
  );
}

export default About;

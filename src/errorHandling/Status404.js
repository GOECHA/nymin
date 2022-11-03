import React from 'react';
import Status from './Status';
import './Status404.css';
import logo from '../images/nymin-logo.png';


const Status404 = () => {
    return (
      <Status code={404}>
        <div className='error-wrapper'>
          <h1>Sorry,</h1>
          <h1>can't find that.</h1>
          <h2>404</h2>
          <img className="logo" src={logo} alt='Not Found logo'/>
        </div>
      </Status>
    );
  };

export default Status404;
import React from 'react';
import Status from './Status';
import './Status404.css';
import logo from '../images/nymin-logo.png';
import { Link } from 'react-router-dom';


const Status404 = () => {
    return (
      <Status code={404}>
        <div className='error-wrapper'>
          <div className="st404-title">
          <h4 >404</h4>
          </div>
          <div className="st404title-2">
          <h2>Don't waste another</h2>
          </div>
          <div className="st404title-3">
          <h2>NY | Min</h2>
          </div>
          <div className="st404title-4">
          <Link to="/" className='link-404-con'>
            <h5>Let's find something <br/> to talk about . . .</h5>
           <img className="stat-4040-logo" src={logo} alt='Not Found logo'/>
          </Link>
          </div>
        </div>
      </Status>
    );
  };

export default Status404;
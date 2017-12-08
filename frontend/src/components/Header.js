import React from 'react';
import './Header.css';
import verMasTarde from './ver-mas-tarde.svg';
import loggedUser from '../utils/loggedUser';

export default () => (
  <header className="HeaderLogin">
    <div className="HeaderLogin-content">
      <div className="HeaderLogin-logo">
        <a href="/">
          <figure><img className="Header-logoImage" src={verMasTarde} alt="Ver+Tarde" /></figure>
          <h1 className="HeaderLogin-title">Ver+Tarde</h1>
        </a>
      </div>
      <div className="HeaderLogin-user">
        {
          loggedUser.getToken() ?
            <a href="/logout">Logout</a> :
            ''
        }
      </div>
    </div>
  </header>
)

import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './../../assets/logo.png';

import './styles.scss';

const Header = props => {
    return (
        <header className="header">
          <div className="wrapper">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="App logo"/>
              </Link>
            </div>
            <div className="callToActions">
              <ul>
                <li>
                  <Link to="/registration">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </header>
    );
};

export default Header;
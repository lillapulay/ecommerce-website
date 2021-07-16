import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';

import Logo from './../../assets/logo.png';

import './styles.scss';

const Header = props => {
  const { currentUser }  = props;

    return (
        <header className="header">
          <div className="wrapper">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="App logo"/>
              </Link>
            </div>
            
            <div className="callToActions">

              {currentUser && (
                <ul>
                  <li>
                    <span onClick={() => auth.signOut()}>
                      LogOut
                    </span>
                  </li>
                </ul>
              )}

              {!currentUser && (
                <ul>
                  <li>
                    <Link to="/registration">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      Login
                    </Link>
                  </li>
                </ul>
              )}
              
            </div>
          </div>

        </header>
    );
};

Header.defaultProps = {
  currentUser: null
}

export default Header;
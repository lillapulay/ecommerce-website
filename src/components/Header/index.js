import React from 'react';

import Logo from './../../assets/logo.png';

import './styles.scss';

const Header = props => {
    return (
        <header className="header">
          <div className="wrapper">
            <div className="logo">
              <img src={Logo} alt="App logo"/>
            </div>
          </div>

        </header>
    );
};

export default Header;
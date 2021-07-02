import React from 'react';

import Indoor from './../../assets/indoor.jpg'
import Outdoor from './../../assets/outdoor.jpg'

import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div 
          className="item"
          style={{backgroundImage: `url(${Indoor})`}}
        >
            <a href="https://google.com">Indoor plants</a>
        </div>
        <div 
          className="item"
          style={{backgroundImage: `url(${Outdoor})`}}
        >
          <a href="https://google.com">Indoor plants</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
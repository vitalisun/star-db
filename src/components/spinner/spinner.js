import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './spinner.css';

const Spinner = () => {

    return (
        <div className="loadingio-spinner-blocks-60a5rpcak4k">
        <div className="ldio-ifovb92oi4n">
          <div style={{left: '38px', top: '38px', animationDelay: '0s'}} />
          <div style={{left: '80px', top: '38px', animationDelay: '0.125s'}} />
          <div style={{left: '122px', top: '38px', animationDelay: '0.25s'}} />
          <div style={{left: '38px', top: '80px', animationDelay: '0.875s'}} />
          <div style={{left: '122px', top: '80px', animationDelay: '0.375s'}} />
          <div style={{left: '38px', top: '122px', animationDelay: '0.75s'}} />
          <div style={{left: '80px', top: '122px', animationDelay: '0.625s'}} />
          <div style={{left: '122px', top: '122px', animationDelay: '0.5s'}} />
        </div>
      </div>

    );
}

export default Spinner;
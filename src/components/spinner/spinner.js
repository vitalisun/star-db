import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './spinner.css';

const Spinner = () => {

    return (
        <div className="loadingio-spinner-blocks-60a5rpcak4k d-flex justify-content-center">
        <div className="ldio-ifovb92oi4n">
          <div style={{ left: '19px', top: '19px', animationDelay: '0s' }} />
          <div style={{ left: '40px', top: '19px', animationDelay: '0.125s' }} />
          <div style={{ left: '61px', top: '19px', animationDelay: '0.25s' }} />
          <div style={{ left: '19px', top: '40px', animationDelay: '0.875s' }} />
          <div style={{ left: '61px', top: '40px', animationDelay: '0.375s' }} />
          <div style={{ left: '19px', top: '61px', animationDelay: '0.75s' }} />
          <div style={{ left: '40px', top: '61px', animationDelay: '0.625s' }} />
          <div style={{ left: '61px', top: '61px', animationDelay: '0.5s' }} />
        </div>
      </div>

    );
}

export default Spinner;
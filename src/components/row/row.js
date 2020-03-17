import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './row.css';

const Row = ({ left, right }) => {
    return (
      <div className="row mb2">
        <div className="col-md-6">
          {left}
        </div>
        <div className="col-md-6">
          {right}
        </div>
      </div>
    );
  };

export default Row;
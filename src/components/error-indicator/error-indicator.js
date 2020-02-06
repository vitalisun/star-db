import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {

    return (

        <div className="error-indicator">
            <img scr={icon} 
                width="100" height="100"
                alt='error icon'/>
            <span className='boom'>
                Boom!
            </span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>

    );
};

export default ErrorIndicator;
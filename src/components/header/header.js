import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './header.css';

const Header = () => {

    return (

        <nav className="header navbar navbar-expand">
                <h3 >Start DB</h3>
                <div className="navbar-nav ml-5">
                        <a className="nav-item nav-link" href="#">People</a>
                        <a className="nav-item nav-link" href="#">Planets</a>
                        <a className="nav-item nav-link" href="#">Starships</a>
                    </div>
            </nav>

    );
}

export default Header;
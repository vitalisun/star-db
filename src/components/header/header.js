import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './header.css';

const Header = () => {

    return (

        <nav class="header navbar navbar-expand">
                <h3 >Start DB</h3>
                <div class="navbar-nav ml-5">
                        <a class="nav-item nav-link" href="#">People</a>
                        <a class="nav-item nav-link" href="#">Planets</a>
                        <a class="nav-item nav-link" href="#">Starships</a>
                    </div>
            </nav>

    );
}

export default Header;
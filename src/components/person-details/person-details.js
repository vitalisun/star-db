import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './person-details.css';
import randomPlanetImg from '../../paris.jpg';

const PersonDetails = () => {

    return (

        <div className='person-details row'>

            <div className='col-4'>
                <img src={randomPlanetImg} alt="Paris" />
            </div>
            <div className='col-8'>

                <h4>Mustafar</h4>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                </ul>
            </div>

        </div>
    );
}

export default PersonDetails;
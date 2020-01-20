import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './random-planet.css';
import randomPlanetImg from '../../paris.jpg';

const RandomPlanet = () => {

    return (

        <div className='random-planet d-flex'>

            <div class="align-self-start">
                <img src={randomPlanetImg} alt="Paris" />
            </div>
            <div class="align-self-end w-50 ml-4">
                <h3>Mustafar</h3>

                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                </ul>
            </div>



        </div>
    );
}

export default RandomPlanet;
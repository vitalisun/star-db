import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './random-planet.css';
import randomPlanetImg from '../../paris.jpg';

import SwapiService from '../../services/swapi-service';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {}
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet });
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {

        const { planet: { id, name, population,
            rotationPeriod, diameter } } = this.state;

        return (

            <div className='random-planet d-flex'>

                <div class="align-self-start">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                </div>
                <div class="align-self-end w-50 ml-4">
                    <h3>{name}</h3>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <span className='term'>Population </span>
                            <span>{population}</span>
                        </li>
                        <li class="list-group-item">
                            <span className='term'>Rotation Period </span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li class="list-group-item">
                            <span className='term'>Diameter </span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>



            </div>
        );
    }

}


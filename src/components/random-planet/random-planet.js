import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './random-planet.css';
import randomPlanetImg from '../../paris.jpg';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }

    render() {

        const { planet, loading } = this.state;

        if (loading) {
            return <Spinner />;
        }

        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PlanetView planet={planet} /> : null;

        return (

            <div className='random-planet d-flex'>

                {spinner}
                {content}

            </div>
        );
    }

}

const PlanetView = ({ planet }) => {


    const { id, name, population,
        rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <div className="align-self-start">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            </div>
            <div className="align-self-end w-50 ml-4">
                <h3>{name}</h3>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className='term'>Population </span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className='term'>Rotation Period </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className='term'>Diameter </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>

        </React.Fragment>
    );
};


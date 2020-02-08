import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './person-details.css';
import randomPlanetImg from '../../paris.jpg';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

export default class PersonDetails extends Component {

    swapiService = new SwapiService();

    state = {
        person: null,
        loading: true
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    onPersonUpdated = (person) => {
        this.setState({
            person,
            loading: false
        });
    };

    updatePerson = () => {
        const { personId } = this.props;
        if (!personId) {
            return;
        }

        this.setState({
            loading: true
        });

        this.swapiService
            .getPerson(personId)
            .then(this.onPersonUpdated)
    }


    render() {
        const { person, loading } = this.state;

        if (!person) {
            return <span>Select a person from a list</span>;
        }

        const spinner = this.state.loading ? <Spinner /> : null;
        const content = this.state.loading ? null : <PersonView person={person} />;

        return (
            <div className='person-details row'>
                {spinner}
                {content}
                
            </div>
        );
    }

}

const PersonView = ({ person }) => {


    const { id, name, gender,
        birthYear, eyeColor } = person;

    return (

        <React.Fragment>
            <div className='col-4'>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                    alt="character" />
            </div>
            <div className='col-8'>

                <h4>{name}</h4>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className='term'>Gender</span>
                        <span> {gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className='term'>Birth Year</span>
                        <span> {birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className='term'>Eye Color</span>
                        <span> {eyeColor}</span>
                    </li>
                    <ErrorButton />
                </ul>
            </div>
        </React.Fragment>



    );
};
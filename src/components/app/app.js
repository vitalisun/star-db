import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';

import './app.css';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    }

    toggleRandomPlanet = () => {

        this.setState((state) => {
            return{
                showRandomPlanet: !state.showRandomPlanet
            }
        });    
    }

    componentDidCatch(){
        console.log('componentDidCatch()');
        this.setState({hasError:true})
    }

    render(){

        if(this.state.hasError){
            return <ErrorIndicator />
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;


        return (
            <div className='container'>
                <Header />
                
                { planet }

                <button className='btn btn-warning' onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>
                <ErrorButton />
                <PeoplePage />

                <div className=
                    'd-flex justify-content-between mt-4'>
                    <ItemList onItemSelected={this.onPersonSelected}
                            getData = {this.swapiService.getAllPlanets} />
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>

                <div className=
                    'd-flex justify-content-between mt-4'>
                    <ItemList onItemSelected={this.onPersonSelected}
                            getData = {this.swapiService.getAllStarships} />
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
    
    
        );
    }
}

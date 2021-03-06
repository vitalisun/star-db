import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import ItemDetails, { Record } from "../item-details/item-details";
import './app.css';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

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

        const { 
            getPerson, 
            getStarship,
            getPersonImage,
            getStarshipImage } = this.swapiService;

        const personDetails = (
            <ItemDetails 
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage} >

                <Record field="name" label="Name" />
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

             </ItemDetails>
        );
        const starshipDetails = (
            <ItemDetails 
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>
                    
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />

            </ItemDetails>
        );

        return (

            <ErrorBoundry>
                <div className='stardb-app container'>
                    <Header />
                
                <Row 
                    left={personDetails}
                    right={starshipDetails} />

                
                </div>
            </ErrorBoundry>


    
    
        );
    }
}

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './people-page.css';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';





export default class PeoplePage extends Component{

    swapiService = new SwapiService();

    state={
        selectedPerson: 3,
        hasError: false
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render(){

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}
                        renderItem={({name, gender, birthYear})=>
                                `${name} (${gender}, ${birthYear})} `}/>
        );

        const personDetails = (
            <ItemDetails personId={this.state.selectedPerson}/>
        );

        return (
            <ErrorBoundry >
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        );
    }
}

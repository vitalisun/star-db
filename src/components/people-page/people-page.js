import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './people-page.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';


const Row = ({left, right}) => {
    return(
        <div className='d-flex justify-content-between mt-4'>
            { left }
            { right }
        </div>        
    );
};

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


    componentDidCatch(error, info){

        debugger;

        this.setState({
            hasError: true
        })
    }


    render(){

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}
                        renderItem={({name, gender, birthYear})=>
                                `${name} (${gender}, ${birthYear})} `}/>
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        );

        const view = this.state.hasError ? 
            <ErrorIndicator /> :
            <Row left={itemList} right={personDetails}/>

        return (
            <Row left={itemList} right={personDetails}/>
        );
    }
}

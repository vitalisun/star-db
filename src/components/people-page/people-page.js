import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './people-page.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';


const Row = ({left, right}) => {
    return(
        <div className='d-flex justify-content-between mt-4'>
            { left }
            { right }
        </div>        
    );
};

class ErrorBoundry extends Component{

    state = {
        hasError: false
    };

    componentDidCatch(error, info){
        this.setState({
            hasError: true
        })
    }

    render(){
        if(this.state.hasError){
            return <ErrorIndicator />
        }
        return this.props.children;
    }
}


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
            <PersonDetails personId={this.state.selectedPerson}/>
        );

        return (
            <ErrorBoundry >
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        );
    }
}

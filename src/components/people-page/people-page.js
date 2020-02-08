import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './people-page.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

export default class PeoplePage extends Component{

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

        const view = this.state.hasError ? 
            <ErrorIndicator /> :
            <React.Fragment>
                <ItemList onItemSelected={this.onPersonSelected}/>
                <PersonDetails personId={this.state.selectedPerson}/>
            </React.Fragment>

        return (
            <div className='d-flex justify-content-between mt-4'>

               { view }
  
            </div>
        );
    }
}

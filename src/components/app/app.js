import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from '../header';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import PersonDetails from '../person-details';

import './app.css';

const App = () => {
    return (
        <div className='container'>
            <Header />
            <RandomPlanet />


            <div className='d-flex justify-content-between mt-4'>
                <ItemList />
                <PersonDetails />
            </div>
        </div>


    );
}

export default App;
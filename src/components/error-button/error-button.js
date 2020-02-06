import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './error-button.css';

export default class ErrorButton extends Component{

    state={
        renderError:false
    };

    render(){

        console.log('render');
        if(this.state.renderError){
            this.foo.bar = 0;
        }

        return(
            <button 
                className='error-button btn btn-danger'
                onClick={()=> this.setState({renderError: true})}>
                Throw error
            </button>
        );

    }
}
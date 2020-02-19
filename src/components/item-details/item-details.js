import React, { Component, Children } from 'react';
import ReactDom from 'react-dom';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

const Record = ({ field, label }) => {

        return(
            <li className="list-group-item">
                <span className='term'>{label}</span>
                <span> {field}</span>
            </li>
        );
};

export { Record } ;

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        image: null,
        loading: true
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    onItemUpdated = (item) => {

        const { getImageUrl } = this.props;

        this.setState({
            item,
            image: getImageUrl(item),
            loading: false
        });
    };

    updateItem = () => {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        this.setState({
            loading: true
        });

        getData(itemId)
            .then(this.onItemUpdated)
    }


    render() {
        const { item, image, loading } = this.state;


        // if (!item) {
        //     return <span>Select a item from a list</span>;
        // }

   



        return (
            <div className='item-details row'>
                <div className='col-4'>
                    <img src={image}
                        alt="character" />
                </div>
                <div className='col-8'>

                    {/* <h4>{name}</h4> */}

                    <ul className="list-group list-group-flush">
                        { 
                            React.Children.map(this.props.children, (child, idx) => {
                                return <li>{idx}</li>;
                            })
                        }
                    </ul>
                </div>
                
            </div>
        );
    }

}

const ItemView = ({ item, image, children }) => {

    console.log(children);

    // const { id, name, gender,
    //     birthYear, eyeColor } = item;

    return (

        <React.Fragment>
            <div className='col-4'>
                <img src={image}
                    alt="character" />
            </div>
            <div className='col-8'>

                {/* <h4>{name}</h4> */}

                <ul className="list-group list-group-flush">
                    { this.props.children }
                </ul>
            </div>
        </React.Fragment>



    );
};
import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './item-details.css';
import randomPlanetImg from '../../paris.jpg';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from '../error-button';

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

        console.log(item);

        if (!item) {
            return <span>Select a item from a list</span>;
        }

        const spinner = this.state.loading ? <Spinner /> : null;
        const content = this.state.loading ? null : <ItemView 
            item={item}
            image={image} />;

        return (
            <div className='item-details row'>
                {spinner}
                {content}
                
            </div>
        );
    }

}

const ItemView = ({ item, image }) => {


    const { id, name, gender,
        birthYear, eyeColor } = item;

    return (

        <React.Fragment>
            <div className='col-4'>
                <img src={image}
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
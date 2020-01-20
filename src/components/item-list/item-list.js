
import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './item-list.css';

const ItemList = () => {

    return (

        <ul className="item-list ist-group">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>
    );
}

export default ItemList;
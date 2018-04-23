import React, { Component } from 'react';
// import './Main.css';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
// import WarehouseTableTrCreator from './WarehouseTableTrCreator';

const WarehouseTableTrCreator = (props) => {
    console.log(props.placeId);
    console.log([...props.placeId]);
    return (
        <tr>
            <td>1</td>
            <td>{props.name}</td>
            <td>{props.count}</td>
            <td>{props.width}</td>
            <td>{props.length}</td>
            <td>{props.height}</td>
            <td>{props.cost}</td>
            <td>{props.supplier}</td>
            <td>{props.placeId.reduce((acc, pl) => acc === '' ? `'${pl}'` : `${acc}, '${pl}'`, '')}</td>
        </tr>
    )
}

export default WarehouseTableTrCreator;
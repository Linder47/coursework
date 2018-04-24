import React, { Component } from 'react';
// import './Main.css';
import { ControlLabel, FormControl, FormGroup, Col } from 'react-bootstrap';
import workers from '../data/workers';

class NameOfPlaceholder extends Component {
    render() {
        return (
            <FormGroup controlId="formControlsSelect">
                <Col sm={4}><ControlLabel>Имя заполнителя:</ControlLabel></Col>
                <FormControl componentClass="select" placeholder="select" onChange={this.props.onNameChange}>
                    {workers.map(workerData =>
                        <option value={workerData.id} key={workerData.id}>{workerData.name}, {workerData.position}</option>
                    )}
                </FormControl>
            </FormGroup>
        );
    }
}

export default NameOfPlaceholder;
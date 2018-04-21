import React, { Component } from 'react';
// import './Main.css';
import { Radio, Checkbox, ControlLabel, FormControl, Static, Button, FormGroup, HelpBlock } from 'react-bootstrap';
import workers from '../data/workers';

class NameOfPlaceholder extends Component {
    render() {
        return (
            <FormGroup controlId="formControlsSelect">
                <ControlLabel>Имя заполнителя:</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                    {/* <option value="select">select</option>
                        <option value="other">...</option> */}
                    {workers.map(workerData =>
                        <option value={workerData.id} key={workerData.id}>{workerData.name}, {workerData.position}</option>
                    )}
                </FormControl>
            </FormGroup>
        );
    }
}

export default NameOfPlaceholder;
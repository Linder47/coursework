import React from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

const FormGroupInput = (props) => {
    return (
        <FormGroup >
            <ControlLabel>{props.operation}:</ControlLabel>
            <FormControl
                required
                type={props.type}
                value={props.val}
                onChange={(e) => { props.onSomeChange(e.target.value) }}
            />
        </FormGroup>
    )
}

export default FormGroupInput;

import React, { Component } from 'react';
// import './Main.css';
import { Radio, Checkbox, ControlLabel, FormControl, Static, Button, FormGroup, HelpBlock } from 'react-bootstrap';
import workers from '../../data/workers';
import goods from '../../data/goods';
import './AcceptanceForm.css';
import NameOfPlaceholder from '../NameOfPlaceholder';
import SelectProduct from '../SelectProduct';
import PopUpAddNewProduct from '../PopUpAddNewProduct/PopUpAddNewProduct';

class AcceptanceForm extends Component {
    state = {
        newProduct: false,
        showPopup: false,
        count: '',
        cost: ''
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    handleAddCountChange = (text) => {
        this.setState({
            count: text
        });
    }

    handleAddCostChange= (text) => {
        this.setState({
            cost: text
        });
    }

    render() {
        return (
            <div>
                <form>
                    <NameOfPlaceholder />

                    <p>Товар:</p>
                    <div onClick={this.togglePopup.bind(this)}>Вписать новый</div>
                    <SelectProduct />

                    <FormGroup >
                        <ControlLabel>Количество товара:</ControlLabel>
                        <FormControl
                            type="number"
                            value={this.state.count}
                            placeholder="от 1 до 100"
                            // maxLength="3"
                            onChange={(e) => { this.handleAddCountChange(e.target.value) }}
                        />
                    </FormGroup>

                    <FormGroup >
                        <ControlLabel>Цена за шт:</ControlLabel>
                        <FormControl
                            type="number"
                            value={this.state.cost}
                            // placeholder="от 1 до 100"

                            onChange={(e) => { this.handleAddCostChange(e.target.value) }}
                        />
                    </FormGroup>


                </form>

                {this.state.showPopup ?
                    <PopUpAddNewProduct
                        text='Создание товара'
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
}

export default AcceptanceForm;


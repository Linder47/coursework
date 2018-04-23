import React, { Component } from 'react';
// import './Main.css';
import { Radio, Checkbox, ControlLabel, FormControl, Static, Button, FormGroup, HelpBlock } from 'react-bootstrap';
import workers from '../../data/workers';
import goods from '../../data/goods';
import './AcceptanceForm.css';
import NameOfPlaceholder from '../NameOfPlaceholder';
import SelectProduct from '../SelectProduct';
import PopUpAddNewProduct from '../PopUpAddNewProduct/PopUpAddNewProduct';
import FormGroupInput from '../FormGroupInput';
import CreateTakenPlaces from '../CreateTakenPlaces';

class AcceptanceForm extends Component {
    state = {
        newProduct: false,
        showPopup: false,
        count: '',
        product: '',
        name: workers[0].id
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    componentWillMount() {
        const b = JSON.parse(localStorage.getItem('localGoods'));
        if (b !== null) {
            this.setState({
                product: b[0].id,
            });
        }
    }

    handleAddCountChange = (text) => {
        this.setState({
            count: text
        });
    }

    handleProductChange = (e) => { ///HERE
        this.setState({
            product: e.target.value
        });
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleMakeAcceptance = (e) => {
        // localStorage.clear();
        e.preventDefault();
        let a = [];
        const b = JSON.parse(localStorage.getItem('localGoods'));
        const places = CreateTakenPlaces(this.state.count);
        a = b;

        for (let i = 0; i < a.length; i++) {
            if (a[i].id === Number(this.state.product)) {
                if (a[i]['count']) {
                    a[i]['count'] = Number(this.state.count) + Number(a[i]['count']);
                } else {
                    a[i]['count'] = Number(this.state.count);
                }
                if (a[i]['placeId']) {
                    a[i]['placeId'].push(...places);
                } else {
                    a[i]['placeId'] = places;
                }
            }
        }

        this.setState({
            count: '',
            product: '',
        });

        console.log(a);

        localStorage.setItem('localGoods', JSON.stringify(a));
    }


    render() {
        return (
            <div>
                <form onSubmit={(e) => { this.handleMakeAcceptance(e) }}>
                    <NameOfPlaceholder
                        onNameChange={this.handleNameChange}
                    />

                    <p>Товар:</p>
                    <div onClick={this.togglePopup.bind(this)}>Вписать новый</div>
                    <SelectProduct
                        onProductChange={this.handleProductChange}
                    />

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

                    <Button type="submit">Провести</Button>

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
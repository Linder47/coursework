import React, { Component } from 'react';
import { ControlLabel, FormControl, Button, FormGroup, Form } from 'react-bootstrap';
import workers from '../../data/workers';
import './AcceptanceForm.css';
import NameOfPlaceholder from '../NameOfPlaceholder';
import SelectProduct from '../SelectProduct';
import PopUpAddNewProduct from '../PopUpAddNewProduct/PopUpAddNewProduct';
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
        if (localStorage.getItem('localGoods')) {
            const b = JSON.parse(localStorage.getItem('localGoods'));
            if (b !== null) {
                this.setState({
                    product: b[0].id,
                });
            }
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
        e.preventDefault();
        if (localStorage.getItem('localGoods')) {
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

            localStorage.setItem('localGoods', JSON.stringify(a));

            alert('Товар успешно записан!');
        }
    }


    render() {
        return (
            <div>
                <Form onSubmit={(e) => { this.handleMakeAcceptance(e) }}>

                    <div className="btn-new-product" onClick={this.togglePopup.bind(this)}>Создать товар</div>

                    <div className="product-group">
                        <NameOfPlaceholder
                            onNameChange={this.handleNameChange}
                        />
                        <SelectProduct
                            onProductChange={this.handleProductChange}
                            oper='acceptance'
                        />
                    </div>

                    <FormGroup validationState="warning">
                        <ControlLabel>Количество товара:</ControlLabel>
                        <FormControl
                            required
                            type="number"
                            value={this.state.count}
                            placeholder="от 1 до 30"
                            onChange={(e) => { this.handleAddCountChange(e.target.value) }}
                        />
                    </FormGroup>

                    <Button type="submit">Провести</Button>

                </Form>

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
import React, { Component } from 'react';
// import './Main.css';
import { ControlLabel, FormControl, Button, FormGroup } from 'react-bootstrap';
import workers from '../../data/workers';
import NameOfPlaceholder from '../NameOfPlaceholder';
import SelectProduct from '../SelectProduct';
import FormGroupInput from '../FormGroupInput';

class ShipmentForm extends Component {
    state = {
        lG: [],
        count: '',
        product: '',
        name: workers[0].id,
        countAvailable: '',
        customer: ''
    }

    componentWillMount() {
        const b = JSON.parse(localStorage.getItem('localGoods'));

        if (b !== null) {
            this.setState({
                lG: b,
                product: b[0]['id'],
                countAvailable: b[0].count
            });
        }
    }

    handleAddCountChange = (text) => {
        this.setState({
            count: text
        });
    }

    onAddCustomerChange = (text) => {
        this.setState({
            customer: text
        });
    }

    handleProductChange = (e) => {
        this.setState({
            product: e.target.value
        });

        for (let i = 0; i < this.state.lG.length; i++) {
            if (Number(this.state.lG[i].id) === Number(e.target.value)) {
                this.setState({
                    countAvailable: this.state.lG[i].count
                });
            }
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleMakeShipment = (e) => {
        if (localStorage.getItem('localGoods')) {
            let a = [];
            const b = JSON.parse(localStorage.getItem('localGoods'));
            a = b;

            for (let i = 0; i < a.length; i++) {
                if (a[i].id === Number(this.state.product)) {
                    if (this.state.count <= a[i]['count']) {
                        a[i]['count'] = Number(a[i]['count']) - Number(this.state.count);
                        a[i]['placeId'] = a[i]['placeId'].slice(this.state.count);
                        alert('Отгрузка оформлена!');
                    } else {
                        alert('На складе недостаточно товара!');
                    }
                }
            }

            localStorage.setItem('localGoods', JSON.stringify(a));
        }
    }

    render() {
        return (
            <div className="shipment-form-wrapper">
                <form onSubmit={(e) => { this.handleMakeShipment(e) }}>
                    <NameOfPlaceholder
                        onNameChange={this.handleNameChange}
                    />

                    <SelectProduct
                        onProductChange={this.handleProductChange}
                        oper='shipment'
                    />

                    <FormGroup >
                        <ControlLabel>Количество товара (не больше {this.state.countAvailable}):</ControlLabel>
                        <FormControl
                            required
                            type="number"
                            value={this.state.count}
                            placeholder='Введите желаемое кол-во товара'
                            onChange={(e) => { this.handleAddCountChange(e.target.value) }}
                        />
                    </FormGroup>

                    <FormGroupInput
                        operation='Заказчик'
                        type='text'
                        value={this.state.customer}
                        onSomeChange={this.onAddCustomerChange}
                    />

                    <Button type="submit">Провести</Button>

                </form>
            </div>
        );
    }
}

export default ShipmentForm;
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
        // cost: '',
        // width: '',
        // height: '',
        // length: '',
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
        console.log(this.state.product);
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
        console.log(this.state.name);
    }

    handleMakeAcceptance = (e) => {
        // localStorage.clear();
        e.preventDefault();
        // debugger;
        console.log(this.state.product);
        let a = [];
        const b = JSON.parse(localStorage.getItem('localGoods'));
        console.log(b);
        // const takenPlacesInLocalStorage = JSON.parse(localStorage.getItem('takenPlaces'));
        const places = CreateTakenPlaces(this.state.count);
        console.log(places);

        a = b;
        console.log(a);

        for (let i = 0; i < a.length; i++) {
            console.log(i);
            console.log(a[i]);
            console.log(a[i].id, typeof a[i].id);
            console.log(this.state.product, typeof this.state.product);
            if (a[i].id === Number(this.state.product)) {
                console.log(a[i]['count']);
                console.log(a[i]['placeId']);
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

                    {/* <FormGroupInput
                        operation='Цена за шт'
                        val={this.state.cost}
                        onSomeChange={this.handleAddCostChange}
                    />

                    <FormGroupInput
                        operation='Высота'
                        val={this.state.height}
                        onSomeChange={this.handleAddHeightChange}
                    />

                    <FormGroupInput
                        operation='Ширина'
                        value={this.state.width}
                        onSomeChange={this.handleAddWidthChange}
                    />

                    <FormGroupInput
                        operation='Длина'
                        value={this.state.length}
                        onSomeChange={this.handleAddLengthChange}
                    /> */}

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

// e.preventDefault();
// let a = [];
// const b = JSON.parse(localStorage.getItem('localGoods'));
// console.log(b);

// const namesFromLocalStorage = new Set();
// const idsFromLocalStorage = new Set();
// const objNameAndValue = new Map();

// if (b !== null) {
//     a = b;

    // for (let i = 0; i < b.length - 1; i++) {
    //     namesFromLocalStorage.add(b[i].name);
    //     idsFromLocalStorage.add(b[i].id);
    //     objNameAndValue.set(b[i].name, b[i].id);
    // }

//     // console.log(namesFromLocalStorage);
//     // console.log(idsFromLocalStorage);
//     // console.log(objNameAndValue);
// }

// const nOP = goods[this.state.product].name;
// const nID = objNameAndValue.get(nOP);
// // console.log(nOP);
// // console.log(objNameAndValue.has(nOP));
// // console.log(objNameAndValue.get(nOP));

// if (this.state.product < 3) {
//     if (nOP === objNameAndValue.has(nOP)) { //если есть и в goods и в lS
//         const data = {
//             'id': nID, 'name': nOP, 'count': this.state.count, 'width': this.state.width,
//             'height': this.state.height, 'length': this.state.length, 'cost': this.state.cost
//         };
//         // console.log(data);
//         // console.log('а чо не работаем');
//         a.push(data);
//         localStorage.setItem('localGoods', JSON.stringify(a));

//         this.setState({
//             addText: '',
//             addSupplier: ''
//         });
//     }
// }


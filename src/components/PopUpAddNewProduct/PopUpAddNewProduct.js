import React, { Component } from 'react';
// import './Main.css';
import AddNeWProduct from '../AddNewProduct';
import goods from '../../data/goods';
import FormGroupInput from '../FormGroupInput';

class PopUpAddNewProduct extends React.Component {
    state = {
        addText: '',
        addSupplier: '',
        cost: '',
        width: '',
        height: '',
        length: '',
    }

    componentWillMount() {
        if (localStorage.getItem('localGoods')) {
            const added = JSON.parse(localStorage.getItem('localGoods'));
            console.log(added);

        }
    }

    handleAddTextChange = (text) => {
        this.setState({
            addText: text
        });
    }

    handleAddSupplierChange = (text) => {
        this.setState({
            addSupplier: text
        });
    }

    handleAddCostChange = (text) => {
        this.setState({
            cost: text
        });
    }

    handleAddWidthChange = (text) => {
        this.setState({
            width: text
        });
    }

    handleAddHeightChange = (text) => {
        this.setState({
            height: text
        });
    }

    handleAddLengthChange = (text) => {
        this.setState({
            length: text
        });
    }

    handleAddNewProduct = (e) => {
        e.preventDefault();
        if (this.state.addText !== '') { //Если не намутил красные инпуты, то фигач проверку, короче!!!!!!!1
            let a = [];
            const b = JSON.parse(localStorage.getItem('localGoods'));

            let id;
            if (b === null) {
                id = Number(goods[goods.length - 1].id) + 1;
            } else {
                console.log(b);
                a = b;
                id = Number(a[a.length - 1].id) + 1;
            }

            const data = {
                'id': id, 'name': this.state.addText, 'supplier': this.state.addSupplier, 'width': this.state.width,
                'height': this.state.height, 'length': this.state.length, 'cost': this.state.cost
            };
            // const data = {
            //     'id': nID, 'name': nOP, 'count': this.state.count, 'width': this.state.width,
            //     'height': this.state.height, 'length': this.state.length, 'cost': this.state.cost
            // };
            console.log(data);
            console.log('а чо не работаем');
            a.push(data);
            console.log(a);
            localStorage.setItem('localGoods', JSON.stringify(a));

            this.setState({
                addText: '',
                addSupplier: '',
                cost: '',
                width: '',
                height: '',
                length: '',
            });
        }
    }


    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>close me</button>
                    {/* <p>hehe {this.state.added}</p> */}

                    <AddNeWProduct
                        onAddNewProduct={this.handleAddNewProduct}
                        nameOfProduct={this.state.addText}
                        nameOfSupplier={this.state.addSupplier}
                        onAddTextChange={this.handleAddTextChange}
                        onAddSupplierChange={this.handleAddSupplierChange}
                        cost={this.state.cost}
                        width={this.state.width}
                        length={this.state.length}
                        height={this.state.height}
                        onAddCostChange={this.handleAddCostChange}
                        onAddWidthChange={this.handleAddWidthChange}
                        onAddHeightChange={this.handleAddHeightChange}
                        onAddLengthChange={this.handleAddLengthChange}
                    />
                </div>
            </div>
        );
    }
}

export default PopUpAddNewProduct;
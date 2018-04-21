import React, { Component } from 'react';
// import './Main.css';
import AddNeWProduct from '../AddNewProduct';
import goods from '../../data/goods';

class PopUpAddNewProduct extends React.Component {
    state = {
        addText: '',
        addSupplier: ''
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

    handleAddNewProduct = (e) => {
        // e.preventDefault();

        if (this.state.addText !== '') {
            let a = [];
            const b = JSON.parse(localStorage.getItem('localGoods'));
            let id = 0;
            if (b === null) {
                id = Number(goods[goods.length - 1].id) + 1;
            } else {
                a = b;
                id = Number(a[a.length - 1].id) + 1;
            }

            const data = { 'id': id, 'name': this.state.addText, 'supplier': this.state.addSupplier };
            console.log(data);
            console.log('а чо не работаем');
            a.push(data);
            localStorage.setItem('localGoods', JSON.stringify(a));

            this.setState({
                addText: '',
                addSupplier: ''
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
                        nameOfProduct={this.state.addText}
                        nameOfSupplier={this.state.addSupplier}
                        onAddTextChange={this.handleAddTextChange}
                        onAddSupplierChange={this.handleAddSupplierChange}
                        onAddNewProduct={this.handleAddNewProduct}
                    />
                </div>
            </div>
        );
    }
}

export default PopUpAddNewProduct;
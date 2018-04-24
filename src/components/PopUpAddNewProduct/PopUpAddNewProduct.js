import React from 'react';
// import './Main.css';
import AddNeWProduct from '../AddNewProduct';
import goods from '../../data/goods';
import './PopUpAddNewProduct.css';

class PopUpAddNewProduct extends React.Component {
    state = {
        addText: '',
        addSupplier: '',
        cost: '',
        height: '',
        width: '',
        length: '',
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

    handleAddHeightChange = (text) => {
        this.setState({
            height: text
        });
    }

    handleAddWidthChange = (text) => {
        this.setState({
            width: text
        });
    }

    handleAddLengthChange = (text) => {
        this.setState({
            length: text
        });
    }

    handleAddNewProduct = (e) => {
        e.preventDefault();
        if (this.state.addText !== '') { 
            if (localStorage.getItem('localGoods')) {
                let a = [];
                const b = JSON.parse(localStorage.getItem('localGoods'));

                let id;
                if (b === null) {
                    id = Number(goods[goods.length - 1].id) + 1;
                } else {
                    a = b;
                    id = Number(a[a.length - 1].id) + 1;
                }

                const data = {
                    'id': id, 'name': this.state.addText, 'supplier': this.state.addSupplier, 'width': this.state.width,
                    'height': this.state.height, 'length': this.state.length, 'cost': this.state.cost
                };
                a.push(data);
                localStorage.setItem('localGoods', JSON.stringify(a));

                this.setState({
                    addText: '',
                    addSupplier: '',
                    width: '',
                    length: '',
                    cost: '',
                    height: '',
                });

                alert('Товар добавлен в список!');
            }

        }
    }


    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1 className="popup-header">{this.props.text}</h1>
                    <button className="main-nav__toggle" onClick={this.props.closePopup}>close me</button>

                    <AddNeWProduct
                        onAddNewProduct={this.handleAddNewProduct}
                        nameOfProduct={this.state.addText}
                        nameOfSupplier={this.state.addSupplier}
                        onAddTextChange={this.handleAddTextChange}
                        onAddSupplierChange={this.handleAddSupplierChange}
                        cost={this.state.cost}
                        height={this.state.height}
                        width={this.state.width}
                        length={this.state.length}
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
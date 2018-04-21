import React, { Component } from 'react';
// import './Main.css';
import { Radio, Checkbox, ControlLabel, FormControl, Static, Button, FormGroup, HelpBlock } from 'react-bootstrap';
import goods from '../data/goods';

const AddNewProduct = (props) => {

    return (
        <form onSubmit={(e) => { props.onAddNewProduct(e) }}>
            {/* <form onSubmit={(e) => { this.handleAddNewProduct(e.target.value) }} > */}
            <FormGroup
                controlId="formBasicText"
            >
                <ControlLabel>Название товара:</ControlLabel>
                <FormControl
                    type="text"
                    value={props.nameOfProduct}
                    placeholder="введите название продукта"
                    onChange={(e) => { props.onAddTextChange(e.target.value) }}
                />
            </FormGroup>

            <FormGroup
                controlId="formBasicText"
            >
                <ControlLabel>Поставщик:</ControlLabel>
                <FormControl
                    type="text"
                    value={props.nameOfSupplier}
                    placeholder="введите название продукта"
                    onChange={(e) => { props.onAddSupplierChange(e.target.value) }}
                />
            </FormGroup>
            <Button type="submit">Добавить</Button>
        </form>

    );
}

export default AddNewProduct;
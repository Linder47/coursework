import React, { Component } from 'react';
// import './Main.css';
import { Radio, Checkbox, ControlLabel, FormControl, Static, Button, FormGroup, HelpBlock } from 'react-bootstrap';
import goods from '../data/goods';
import FormGroupInput from './FormGroupInput';

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
                    placeholder="введите поставщика"
                    onChange={(e) => { props.onAddSupplierChange(e.target.value) }}
                />
            </FormGroup>


            <FormGroupInput
                operation='Цена за шт'
                val={props.cost}
                onSomeChange={props.onAddCostChange}
            />

            <FormGroupInput
                operation='Высота'
                val={props.height}
                onSomeChange={props.onAddHeightChange}
            />

            <FormGroupInput
                operation='Ширина'
                value={props.width}
                onSomeChange={props.onAddWidthChange}
            />

            <FormGroupInput
                operation='Длина'
                value={props.length}
                onSomeChange={props.onAddLengthChange}
            />


            <Button type="submit">Добавить</Button>
        </form>

    );
}

export default AddNewProduct;
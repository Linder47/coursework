import React from 'react';
import { ControlLabel, FormControl, Button, FormGroup } from 'react-bootstrap';
import FormGroupInput from './FormGroupInput';

const AddNewProduct = (props) => {
    return (
        <form onSubmit={(e) => { props.onAddNewProduct(e) }}>
            <FormGroup
                controlId="formBasicText"
            >
                <ControlLabel>Название товара:</ControlLabel>
                <FormControl
                    required
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
                    required
                    type="text"
                    value={props.nameOfSupplier}
                    placeholder="введите поставщика"
                    onChange={(e) => { props.onAddSupplierChange(e.target.value) }}
                />
            </FormGroup>

            <FormGroupInput
                type='number'
                operation='Цена за шт'
                val={props.cost}
                onSomeChange={props.onAddCostChange}
            />

            <FormGroupInput
                type='number'
                operation='Высота'
                val={props.height}
                onSomeChange={props.onAddHeightChange}
            />

            <FormGroupInput
                type='number'
                operation='Ширина'
                val={props.width}
                onSomeChange={props.onAddWidthChange}
            />

            <FormGroupInput
                type='number'
                operation='Длина'
                val={props.length}
                onSomeChange={props.onAddLengthChange}
            />

            <Button type="submit">Добавить</Button>
        </form>
    );
}

export default AddNewProduct;
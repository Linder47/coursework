import React, { Component } from 'react';
// import './Main.css';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import goods from '../data/goods';

class SelectProduct extends Component {
    state = {
        gs: []
    }

    componentWillMount() {
        if (localStorage.getItem('localGoods')) {
            const gs = JSON.parse(localStorage.getItem('localGoods'));
            console.log(gs);

            this.setState({
                gs
            });
        }
    }

    render() {
        return (
            <FormGroup controlId="formControlsSelect">
                <ControlLabel>Наименование товара:</ControlLabel>
                <FormControl componentClass="select" placeholder="select" onChange={this.props.onProductChange}>
                    {/* <option value="select">select</option>
                        <option value="other">...</option> */}
                    {/* <select value={goods[0].id} onChange={this.props.onProductChange}> */}
                    {/* {goods.map(productData =>
                        <option value={productData.id} key={productData.id}>{productData.name}</option>
                    )} */}
                    {this.state.gs !== null ? this.state.gs.map(productData =>
                        <option value={productData.id} key={productData.id}>{productData.name}</option>
                    ) : null}
                    {/* </select> */}
                </FormControl>
            </FormGroup>
        );
    }
}

export default SelectProduct;
import React, { Component } from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

class SelectProduct extends Component {
    state = {
        gs: []
    }

    componentWillMount() {
        if (localStorage.getItem('localGoods')) {
            const a = JSON.parse(localStorage.getItem('localGoods'));
            const b = [];

            if (this.props.oper === "shipment") {
                for (let i = 0; i < a.length; i++) {
                    if (a[i].count !== undefined) {
                        console.log('пушим!');
                        b.push(a[i]);
                    }
                }
            } else {
                b.push(...a);
            }

            this.setState({
                gs: b
            });
        }
    }

    render() {
        return (
            <FormGroup controlId="formControlsSelect">
                <ControlLabel>Наименование товара:</ControlLabel>
                <FormControl componentClass="select" placeholder="select" onChange={this.props.onProductChange}>
                    {this.state.gs !== null ? this.state.gs.map(productData =>
                        <option value={productData.id} key={productData.id}>{productData.name}</option>
                    ) : null}
                </FormControl>
            </FormGroup>
        );
    }
}

export default SelectProduct;
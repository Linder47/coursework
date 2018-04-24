import React, { Component } from 'react';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

class SelectProductSearch extends Component {
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
                <option value='-1' key='-1'>Все</option>
                    {this.state.gs !== null ? this.state.gs.map(productData =>
                        <option value={productData.id} key={productData.id}>{productData.name}</option>
                    ) : null}
                </FormControl>
            </FormGroup>
        );
    }
}

export default SelectProductSearch;
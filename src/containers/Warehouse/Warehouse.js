import React, { Component } from 'react';
// import './Main.css';
import { Nav, NavItem, Button } from 'react-bootstrap';
import SelectProduct from '../../components/SelectProduct';
import WarehouseTable from '../../components/WarehouseTable';

class Warehouse extends Component {
    state = {
        gs: [],
        elemsToShow: [],
        selectedProduct: ''
    }

    componentWillMount() {
        if (localStorage.getItem('localGoods')) {
            const g = JSON.parse(localStorage.getItem('localGoods'));

            this.setState({
                gs: g,
                elemsToShow: g,
                selectedProduct: g[0].id
            });
        }
    }

    handleSearchChange = (e) => { ///HERE
        this.setState({
            selectedProduct: e.target.value
        });
    }

    handleMakeSearch = (e) => {
        e.preventDefault();

        if (this.state.selectedProduct === '') {
            this.setState({
                elemsToShow: this.state.gs
            });
        } else {
            for (let i = 0; i < this.state.gs.length; i++) {
                if (this.state.gs[i].id === Number(this.state.selectedProduct)) {
                    this.setState({
                        elemsToShow: [this.state.gs[i]]
                    });
                }
            }
        }
    }

    render() {
        return (
            <div>
                <div className='nav_wrapper'>
                    ПРИЕМОЧКА

                    <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
                        <NavItem eventKey="1" href="/coursework/acceptance" >
                            Приемка
        </NavItem>
                        <NavItem eventKey="2" title="Item" href="/coursework/warehouse" disabled>
                            Склад
        </NavItem>
                        <NavItem eventKey="3" href="/coursework/shipment">
                            Отгрузка
        </NavItem>
                    </Nav>
                </div>

                <form onSubmit={(e) => { this.handleMakeSearch(e) }}>
                    <SelectProduct
                        onProductChange={this.handleSearchChange}
                    />

                    <Button type="submit">Поиск</Button>
                </form>

                <WarehouseTable
                    arr={this.state.elemsToShow}
                />

            </div>
        );
    }
}

export default Warehouse;
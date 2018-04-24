import React, { Component } from 'react';
// import './Main.css';
import { Nav, NavItem, Button } from 'react-bootstrap';
import SelectProductSearch from '../../components/SelectProductSearch';
import WarehouseTable from '../../components/WarehouseTable';
import './Warehouse.css';

class Warehouse extends Component {
    state = {
        gs: [],
        elemsToShow: [],
        selectedProduct: '-1',
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

    handleSearchChange = (e) => {
        this.setState({
            selectedProduct: e.target.value
        });
    }

    handleMakeSearch = (e) => {
        e.preventDefault();

        if (this.state.selectedProduct === '-1') {
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
                    <Nav className="nav-wrapper" bsStyle="tabs" activeKey="2" justified>
                        <NavItem className="nav-item" eventKey="1" href="/coursework/acceptance">
                            Приемка
                    </NavItem>
                        <NavItem className="nav-item" eventKey="2" href="/coursework/warehouse" disabled>
                            Склад
                    </NavItem>
                        <NavItem className="nav-item" eventKey="3" href="/coursework/shipment">
                            Отгрузка
                    </NavItem>
                    </Nav>
                </div>
                <div className="warehouse-search-wrapper">
                    <form onSubmit={(e) => { this.handleMakeSearch(e) }}>
                        <SelectProductSearch
                            onProductChange={this.handleSearchChange}
                        />

                        <Button type="submit">Поиск</Button>
                    </form>
                </div>
                
                <WarehouseTable
                    arr={this.state.elemsToShow}
                />
            </div>
        );
    }
}

export default Warehouse;
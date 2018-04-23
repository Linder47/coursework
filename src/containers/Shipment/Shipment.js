import React, { Component } from 'react';
// import './Main.css';
import { Nav, NavItem, Button } from 'react-bootstrap';
import SelectProduct from '../../components/SelectProduct';
// import WarehouseTable from '../../components/WarehouseTable';

class Shipment extends Component {

    
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


            </div>
        );
    }
}

export default Shipment;
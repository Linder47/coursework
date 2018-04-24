import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import ShipmentForm from '../../components/ShipmentForm/ShipmentForm';
import './Shipment.css';

class Shipment extends Component {
    render() {
        return (
            <div>
                <div className='nav_wrapper'>
                    <Nav className="nav-wrapper" bsStyle="tabs" activeKey="3" justified>
                        <NavItem className="nav-item" eventKey="1" href="/coursework/acceptance">
                            Приемка
                    </NavItem>
                        <NavItem className="nav-item" eventKey="2" href="/coursework/warehouse">
                            Склад
                    </NavItem>
                        <NavItem className="nav-item" eventKey="3" href="/coursework/shipment" disabled>
                            Отгрузка
                    </NavItem>
                    </Nav>
                </div>
                <div className="shipment-form-wrapper">
                    <ShipmentForm />
                </div>
            </div>
        );
    }
}

export default Shipment;
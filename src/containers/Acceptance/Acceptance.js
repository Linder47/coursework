import React, { Component } from 'react';
// import './Main.css';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import AcceptanceForm from '../../components/AcceptanceForm/AcceptanceForm';

class Acceptance extends Component {
    render() {
        return (
            <div className='nav_wrapper'>
                ПРИЕМОЧКА

                    <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
                    <NavItem eventKey="1" href="/coursework/acceptance" disabled>
                        Приемка
        </NavItem>
                    <NavItem eventKey="2" title="Item" href="/coursework/warehouse">
                        Склад
        </NavItem>
                    <NavItem eventKey="3" href="/coursework/shipment">
                        Отгрузка
        </NavItem>
                </Nav>
                <AcceptanceForm />

            </div>
        );
    }
}

export default Acceptance;
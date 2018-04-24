import React, { Component } from 'react';
// import './Main.css';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import AcceptanceForm from '../../components/AcceptanceForm/AcceptanceForm';
import './Acceptance.css';


class Acceptance extends Component {
    render() {
        return (
            <div className='nav_wrapper'>
                <Nav className="nav-wrapper" bsStyle="tabs" activeKey="1" justified>
                    <NavItem className="nav-item" eventKey="1" href="/coursework/acceptance" disabled>
                        Приемка
                    </NavItem>
                    <NavItem className="nav-item" eventKey="2" href="/coursework/warehouse">
                        Склад
                    </NavItem>
                    <NavItem className="nav-item" eventKey="3" href="/coursework/shipment">
                        Отгрузка
                    </NavItem>
                </Nav>
                <AcceptanceForm />

            </div>
        );
    }
}

export default Acceptance;
import React, { Component } from 'react';
import './Main.css';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

class Main extends Component {
    render() {
        return (
            <div className='nav_wrapper'>
                {/* <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="/coursework/acceptance">
                            Приемка
    </NavItem>
                        <NavItem eventKey={2} href="/coursework/warehouse">
                            Склад
    </NavItem>
                        <NavItem eventKey={2} href="/coursework/shipment">
                            Отгрузка
    </NavItem>
                    </Nav>
                </Navbar>; */}
            </div>
        );
    }
}

export default Main;
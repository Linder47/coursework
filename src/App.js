import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './containers/Main/Main';
import Acceptance from './containers/Acceptance/Acceptance';
import Warehouse from './containers/Warehouse/Warehouse';
import Shipment from './containers/Shipment/Shipment';
import { PageHeader } from 'react-bootstrap';

const App = () => {
  return (
    <div className="app-main-page">
      <div className="page-header">
        <PageHeader>Система Управления Складским Комплексом</PageHeader>
      </div>
      <Switch>
        <Route path='/acceptance/' component={Acceptance} />
        <Route path='/warehouse/' component={Warehouse} />
        <Route path='/shipment/' component={Shipment} />
        <Route path='/' component={Main} />
      </Switch>
    </div>
  )
}


export default App;

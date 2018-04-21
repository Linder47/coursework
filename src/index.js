import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const CWApp = () => (
    <BrowserRouter basename="/coursework/">
      <App />
    </BrowserRouter>
  )

ReactDOM.render(<CWApp />, document.getElementById('root'));
registerServiceWorker();

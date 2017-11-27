import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import Routes from './routes/';
import { store, history } from "./helpers";
ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <div className="app-container">
        <Nav />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));

// Enable hot relading
module.hot.accept();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import Routes from './routes/';
import { store, history } from "./helpers";
import './style/vendor/bootstrap/css/bootstrap.min.css';
import './style/vendor/font-awesome/css/font-awesome.min.css';
import './style/css/clean-blog.min.css';
import './style/css/style.css';

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

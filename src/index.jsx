import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import { App } from './components/App';
import {loadArticles} from './actions/articleAction';

import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './helpers/index';
import { alertActions } from './actions/index';
import { PrivateRoute } from './components/index';
import { HomePage } from './components/home/index';
import { LoginPage } from './components/login/index';
import { RegisterPage } from './components/register/index';
import { AboutPage } from './components/about/AboutPage';
import { ContactPage } from './components/contact/ContactPage';
// import Nav from './common/Nav';
// import Footer from './common/Footer';

// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();
store.dispatch(loadArticles());

render(
    <Provider store={store}>
        {/* <Router history={history}>
                    <div>
                        <Route path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/contact" component={ContactPage} />
                    </div>
                </Router> */}
        <App />
    </Provider>,
    document.getElementById('root')
);
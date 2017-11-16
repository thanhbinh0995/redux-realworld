import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers/index';
import { alertActions } from '../actions/index';
import { PrivateRoute } from './index';
import { HomePage } from './home/index';
import { LoginPage } from './login/index';
import { RegisterPage } from './register/index';
import { AboutPage } from './about/AboutPage';
import { ContactPage } from './contact/ContactPage';
import Nav from './common/Nav';
import Footer from './common/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);

        // const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div style={{backgroundColor: "#ccc"}}>
                {this.props.user ? <Nav currentUser={this.props.user} /> : <Nav />}
                <Router history={history}>
                    <div>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/contact" component={ContactPage} />
                    </div>
                </Router>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert, authentication } = state;
    const { user } = authentication;

    return {
        user,
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
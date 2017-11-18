import React from "react";
import { Route, Router } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../helpers";
import { alertActions } from "../actions";
import { PrivateRoute } from "./PrivateRoute";
import { HomePage } from "./home";
import { LoginPage } from "./login";
import { RegisterPage } from "./register";
import { AboutPage } from "./about/AboutPage";
import { ContactPage } from "./contact/ContactPage";
import { ProfilePage } from "./profile/ProfilePage";
import { ProfileEditPage } from "./profile/ProfileEditPage";

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route path="/profile/edit" component={ProfileEditPage} />
          </div>
        </Router>
      </div>
    );
  }
}

const connectedApp = connect()(App);
export { connectedApp as App };
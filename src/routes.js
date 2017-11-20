import React from 'react';
// import { Route } from "react-router-dom";
import { Route, IndexRoute } from 'react-router';
import { PrivateRoute } from "./components/PrivateRoute";
import { App } from './components/App';
import { HomePage } from "./components/home";
import { LoginPage } from "./components/login";
import { RegisterPage } from "./components/register";
import { AboutPage } from "./components/about/AboutPage";
import { ContactPage } from "./components/contact/ContactPage";
// import { ProfilePage } from "./components/profile/ProfilePage";
// import RequireAuth from './components/hoc/require-auth';

const TopLevelRoutes = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegisterPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/about" component={AboutPage} />
  </Switch>
);

export default TopLevelRoutes;

// export default (
//   <Route path="/" component={App}>
//     <IndexRoute component={HomePage} />
//     <Route path="/login" component={LoginPage} />
//     <Route path="/register" component={RegisterPage} />
//     <Route path="/about" component={AboutPage} />
//     <Route path="/contact" component={ContactPage} />
//     <Route exact path="/profile" component={ProfilePage} />
//   </Route>
// );

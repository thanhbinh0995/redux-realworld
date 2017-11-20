import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from "../components/home";
import { LoginPage } from "../components/login";
import { RegisterPage } from "../components/register";
import { AboutPage } from "../components/about/AboutPage";
import { ContactPage } from "../components/contact/ContactPage";
// import { ProfilePage } from "./components/profile/ProfilePage";
// import RequireAuth from './components/hoc/require-auth';

const TopLevelRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />    
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegisterPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
  </Switch>
);

export default TopLevelRoutes;

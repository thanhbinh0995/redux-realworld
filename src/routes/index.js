import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {PrivateRoute} from "../components/PrivateRoute";
// import { HomePage } from "../components/home";
import HomePage from '../components/home/HomePage';
import LoginPage from "../components/login/LoginPage";
import { RegisterPage } from "../components/register";
import { AboutPage } from "../components/about/AboutPage";
import { ContactPage } from "../components/contact/ContactPage";
import { ProfilePage } from "../components/profile/ProfilePage";

const TopLevelRoutes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={HomePage} />    
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegisterPage} />
    <Route path="/register" component={RegisterPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/profile" component={ProfilePage} />    
  </Switch>
);

export default TopLevelRoutes;

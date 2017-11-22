import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {PrivateRoute} from "../components/PrivateRoute";
import HomePage from '../components/home/HomePage';
import LoginPage from "../components/login/LoginPage";
import RegisterPage from "../components/register/RegisterPage";
import AboutPage from "../components/about/AboutPage";
import ContactPage from "../components/contact/ContactPage";
import ProfilePage from "../components/profile/ProfilePage";

const TopLevelRoutes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={HomePage} />   
    <PrivateRoute path="/profile" component={ProfilePage} />     
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegisterPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
  </Switch>
);

export default TopLevelRoutes;

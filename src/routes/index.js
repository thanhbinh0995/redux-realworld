import React from "react";
import {Route, Switch} from "react-router-dom";
import {PrivateRoute} from "../components/PrivateRoute";
import HomePage from "../components/home/HomePage";
import LoginPage from "../components/login/LoginPage";
import RegisterPage from "../components/register/RegisterPage";
import ProfilePage from "../components/profile/ProfilePage";
import Chat from "../components/chat/Chat";

const TopLevelRoutes = () => (
    <Switch>
        <PrivateRoute exact path="/" component={HomePage}/>
        <PrivateRoute path="/profile" component={ProfilePage}/>
        <PrivateRoute path="/chat" component={Chat}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegisterPage}/>
    </Switch>
);

export default TopLevelRoutes;

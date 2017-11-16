import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Sign In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/register">Sign Up</a>
        </li>
      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Logout</a>
        </li>
      </ul>
    );
  }

  return null;
};

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="/">Start Bootstrap</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <LoggedOutView currentUser={this.props.currentUser} />
            <LoggedInView currentUser={this.props.currentUser} />
          </div>
        </div>
      </nav>
    );
  }
}

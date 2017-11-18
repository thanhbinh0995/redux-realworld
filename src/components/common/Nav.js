import React from "react";
import {Link} from "react-router-dom";

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>

          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>

          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Sign In</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Sign Up</Link>
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
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>

          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/post">New Post</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">({props.currentUser.username})Profile</Link>
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
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation">
              Menu
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              {this.props.user ? <LoggedInView currentUser={this.props.user}/> : <LoggedOutView />}
            </div>
          </div>
        </nav>
    );
  }
}
// function mapStateToProps(state) {
//   const { user } = state.authentication;
//   return {
//       user,
//   };
// }

// const connectedNav = connect(mapStateToProps)(Nav);
// export { connectedHomePage as Nav };

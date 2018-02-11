import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {userActions} from "../../actions/user.actions";

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
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
          <Link className="nav-link" to="/chat">Chatting</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">({props.currentUser.username})Profile</Link>
        </li>
      </ul>
    );
  }

  return null;
};

class Nav extends React.Component {
  constructor(props) {
    super(props);
    const {dispatch} = this.props;
    dispatch(userActions.getCurrentUser());
  }

  render() {
    const currentUser = this.props.currentUser;
    return (
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="/">Start Bootstrap</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                  data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                  aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            {currentUser ? <LoggedInView currentUser={currentUser}/> : <LoggedOutView />}
          </div>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  const {currentUser} = state.authentication;
  return {
    currentUser
  };
}
export default connect(mapStateToProps)(Nav);
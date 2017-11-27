import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {userActions} from "../../actions/user.actions";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      username: '',
      bio: '',
      email: '',
      password: ''
    };
    this.updateState = field => ev => {
      const state = this.state;
      const newState = Object.assign({}, state, {[field]: ev.target.value});
      this.setState(newState);
    };

    this.submitForm = ev => {
      ev.preventDefault();
      const user = Object.assign({}, this.state);
      const { dispatch } = this.props;
      if (!user.password) {
        delete user.password;
      }
      dispatch(userActions.save(user));
      dispatch(userActions.getCurrentUser());
    };
  }

  componentWillMount() {
    if (this.props.currentUser) {
      Object.assign(this.state, {
        image: this.props.currentUser.image || '',
        username: this.props.currentUser.username,
        bio: this.props.currentUser.bio,
        email: this.props.currentUser.email
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.currentUser) {
      this.setState(Object.assign({}, this.state, {
        image: nextProps.currentUser.image || '',
        username: nextProps.currentUser.username,
        bio: nextProps.currentUser.bio,
        email: nextProps.currentUser.email
      }));
    }
  }

  render() {
    return (
        <div>
          <div className="container" style={{paddingTop: "100px"}}>
            <Link to="/login" className="btn btn-link">Logout</Link>
            <form onSubmit={this.submitForm}>
              <fieldset>
                <fieldset className="form-group">
                <textarea
                    className="form-control form-control-lg"
                    rows="8"
                    placeholder="Short bio about you"
                    value={this.state.bio}
                    onChange={this.updateState('bio')}>
                </textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                      className="form-control"
                      type="text"
                      placeholder="URL of profile picture"
                      value={this.state.image}
                      onChange={this.updateState('image')}/>
                </fieldset>
                <fieldset className="form-group">
                  <input
                      className="form-control"
                      type="text"
                      placeholder="Email"
                      value={this.state.email}
                      readOnly={true}
                      onChange={this.updateState('email')}/>
                </fieldset>
                <fieldset className="form-group">
                  <input
                      className="form-control"
                      type="text"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.updateState('username')}/>
                </fieldset>
                <fieldset className="form-group">
                  <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="New Password"
                      value={this.state.password}
                      onChange={this.updateState('password')}/>
                </fieldset>
                <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit">
                  Update Settings
                </button>
              </fieldset>
            </form>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  const {currentUser} = state.authentication;
  return {
    currentUser,
  };
}

export default connect(mapStateToProps)(ProfilePage);
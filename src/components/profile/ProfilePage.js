import React from "react";
import { connect } from "react-redux";
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";


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
      const newState = Object.assign({}, state, { [field]: ev.target.value });
      this.setState(newState);
    };

    this.submitForm = ev => {
      ev.preventDefault();

      const user = Object.assign({}, this.state);
      if (!user.password) {
        delete user.password;
      }

      this.props.onSubmitForm(user);
    };
  }

  componentWillMount() {
    if (this.props.user.data.user) {
      Object.assign(this.state, {
        image: this.props.user.data.user.image || '',
        username: this.props.user.data.user.username,
        bio: this.props.user.data.user.bio,
        email: this.props.user.data.user.email
      });
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  //   if (nextProps.user) {
  //     this.setState(Object.assign({}, this.state, {
  //       image: nextProps.user.image || '',
  //       username: nextProps.user.username,
  //       bio: nextProps.user.bio,
  //       email: nextProps.user.email
  //     }));
  //   }
  // }

  render() {
    const { user } = this.props.user.data;
    return (
      <div>
        <div className="container" style={{ paddingTop: "100px" }}>
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
                  onChange={this.updateState('image')} />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  value={this.state.email}
                  readOnly={true}
                  onChange={this.updateState('email')} />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.updateState('username')} />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="New Password"
                  value={this.state.password}
                  onChange={this.updateState('password')} />
              </fieldset>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                type="submit"
                disabled={this.state.inProgress}>
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
  const { user } = state.authentication;
  return {
    user
  };
}

const connectedProfilePage = connect(mapStateToProps)(ProfilePage);
export { connectedProfilePage as ProfilePage };
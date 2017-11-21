import React from "react";
import {connect} from "react-redux";
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
  }

  render() {
    const {user} = this.props;
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
                    value="">
                </textarea>
                </fieldset>
                <fieldset className="form-group">
                  <input
                      className="form-control"
                      type="text"
                      placeholder="URL of profile picture"
                      value={user.image}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                      className="form-control"
                      type="text"
                      placeholder="Email"
                      value="thanhbinh@gmail.com"
                      readOnly={true}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                      className="form-control"
                      type="text"
                      placeholder="Username"
                      value={user.username}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="New Password"
                  />
                </fieldset>
                <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled="false">
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
  const {user} = state.authentication;
  return {
    user
  };
}

const connectedProfilePage = connect(mapStateToProps)(ProfilePage);
export {connectedProfilePage as ProfilePage};
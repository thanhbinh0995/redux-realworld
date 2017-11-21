import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../../style/img/home-bg.jpg";
import { userActions } from "../../actions";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        email: '',
        password: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.email && user.username && user.password) {
      dispatch(userActions.register(user));      
    }
  }

  render() {
    const { registering, alert } = this.props;
    let message; 
    if (alert.message !== '' && alert.message) {
      message = JSON.parse(alert.message);
    }
    console.log(message);
    const { user, submitted } = this.state;
    return (
      <div>
        <header className="masthead" style={{ backgroundImage: 'url(' + Home + ')' }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-md-10 mx-auto">
                <div className="page-body">
                  <div className="container" style={{ padding: "100px 0" }}>
                    <h2>Register</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                      <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" value={user.email}
                          onChange={this.handleChange} />
                        {submitted && !user.email &&
                          <div className="help-block">Email is required</div>
                        }
                        {message && message.email &&
                          <div className={`alert ${alert.type}`}>Email {message.email[0]}</div>
                        }
                      </div>
                      <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={user.username}
                          onChange={this.handleChange} />
                        {submitted && !user.username &&
                          <div className="help-block">Username is required</div>
                        }
                        { message && message.username && 
                          <div className={`alert ${alert.type}`}>Username {message.username[0]}</div>
                        }
                      </div>
                      <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password}
                          onChange={this.handleChange} />
                        {submitted && !user.password &&
                          <div className="help-block">Password is required</div>
                        }
                        {message && message.password &&
                          <div className={`alert ${alert.type}`}>Password {message.password[0]}</div>
                        }
                      </div>
                      <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        {registering &&
                          <img
                            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  const { registering } = state.registration;
  return {
    alert,
    registering
  };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
import React from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {userActions} from "../../actions";
import ContactBG from "../../style/img/contact-bg.jpg";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.props.dispatch(userActions.logout());

        this.state = {
            user: {
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        const {user} = this.state;
        const {dispatch} = this.props;
        if (user.username && user.password) {
            dispatch(userActions.login(user));
        }
    }

    render() {
        const {loggingIn, alert} = this.props;
        const {user, submitted} = this.state;
        return (
            <div>
                <header className="masthead" style={{backgroundImage: 'url(' + ContactBG + ')'}}>
                    <div className="overlay"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-md-10 mx-auto">
                                <div className="page-body">
                                    <div className="container" style={{padding: "100px 0"}}>
                                        <h2>Login</h2>
                                        <form name="form" onSubmit={this.handleSubmit}>
                                            <div
                                                className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                                                <label htmlFor="username">Username</label>
                                                <input type="text" className="form-control" name="username"
                                                       value={user.username}
                                                       onChange={this.handleChange}/>
                                                {submitted && !user.username &&
                                                <div className="help-block">Username is required</div>
                                                }
                                            </div>
                                            <div
                                                className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                                <label htmlFor="password">Password</label>
                                                <input type="password" className="form-control" name="password"
                                                       value={user.password}
                                                       onChange={this.handleChange}/>
                                                {submitted && !user.password &&
                                                <div className="help-block">Password is required</div>
                                                }
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-primary">Login</button>
                                                {loggingIn &&
                                                <img
                                                    src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                                                }
                                                <Link to="/register" className="btn btn-link">Register</Link>
                                            </div>
                                            {alert.message &&
                                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                                            }
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
    const {alert} = state;
    const {loggingIn} = state.authentication;
    return {
        loggingIn,
        alert
    };
}

export default withRouter(connect(mapStateToProps)(LoginPage));
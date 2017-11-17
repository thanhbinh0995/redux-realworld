import React from "react";
import {connect} from "react-redux";
import Nav from "../common/Nav";
import Footer from "../common/Footer";


class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user} = this.props;
    return (
        <div>
          <Nav user={user}/>
          <div className="container" style={{paddingTop: "100px"}}>
            <div className="row">
              <div className="col-md-5 toppad pull-right col-md-offset-3 ">
                <a href="login">Logout</a>
              </div>
              <div
                  className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad">

                <div className="panel panel-info">
                  <div className="panel-heading">
                    <h3 className="panel-title">Profile</h3>
                  </div>
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-3 col-lg-3 " align="center"><img alt="User Pic" src=""
                                                                              className="img-circle img-responsive"/>
                      </div>
                      <div className=" col-md-9 col-lg-9 ">
                        <table className="table table-user-information">
                          <tbody>
                          <tr>
                            <td>First Name</td>
                            <td>{user.firstName}</td>
                          </tr>
                          <tr>
                            <td>Last Name</td>
                            <td>{user.lastName}</td>
                          </tr>
                          <tr>
                            <td>Username</td>
                            <td>{user.username}</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="panel-footer">
                    <a data-original-title="Broadcast Message" data-toggle="tooltip" type="button"
                       className="btn btn-sm btn-primary"><i className="glyphicon glyphicon-envelope"></i></a>
                    <span className="pull-right">
                    <a href="profile/edit" data-original-title="Edit this user" data-toggle="tooltip" type="button"
                       className="btn btn-sm btn-warning"><i className="glyphicon glyphicon-edit"></i></a>
                    <a data-original-title="Remove this user" data-toggle="tooltip" type="button"
                       className="btn btn-sm btn-danger"><i className="glyphicon glyphicon-remove"></i></a>
                  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
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
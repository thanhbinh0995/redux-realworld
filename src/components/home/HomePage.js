import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {getAll, getCurrentUser} from "../../actions/user.actions";
import {getGroupsByUser} from "../../actions/chatAction";
import SwipeCard from "../card/SwipeCard";

class HomePage extends React.Component {
    componentWillMount() {
        this.props.getAll();
        this.props.getCurrentUser();
        this.props.getGroupsByUser();
    }

    render() {
        console.log(this.props.groups);
        const currentUser = this.props.currentUser;
        let users = this.props.users.items ? this.props.users.items.data.data : null;
        if (currentUser && users && users.length > 0) {
            users = users.filter((user) => {
                return user.id !== currentUser.id;
            })
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-md-10 mx-auto">
                            { users && users.length > 0 ? <SwipeCard users={users}/> : <p>Loading...</p> }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.authentication;
    const {users} = state;
    const groups = state.chat;
    return {
        currentUser,
        users,
        groups
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getAll, getCurrentUser, getGroupsByUser}, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
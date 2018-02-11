import React from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
const socket = io('http://localhost:9000');

export class Chat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentUser = this.props.currentUser;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="chat">
                            <div className="chat-body" style={{ paddingTop: '40px' }}>
                                <div className="chat-title">Global Chat</div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { currentUser } = state.authentication;
    const { users } = state;
    return {
        currentUser,
        users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        //actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

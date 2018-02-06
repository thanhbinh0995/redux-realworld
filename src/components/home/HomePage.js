import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Header from "../common/Header";
import {Link, withRouter} from "react-router-dom";
import {getAll, getCurrentUser} from "../../actions/user.actions";
import SwipeCard from '../card/SwipeCard';

class HomePage extends React.Component {
    componentWillMount() {
        this.props.getAll();
        this.props.getCurrentUser();
    }

    renderArticles(articles) {
        if (articles.length === 0) {
            return (
                <div>
                    Loading ...
                </div>
            )
        } else return articles.map((article, index) => {
            return (
                <div className="post-preview" key={index}>
                    <Link to={`/article/${article.slug}`} className="preview-link">
                        <h2 className="post-title">{article.title}</h2>
                        <h3 className="post-subtitle">{article.description}</h3>
                    </Link>
                    <p className="post-meta">Posted by <a href="#">{article.author.username}</a>
                        on {new Date(article.createdAt).toUTCString()}</p>
                </div>
            );
        });
    }

    render() {
        const currentUser = this.props.currentUser;
        let users = this.props.users.items ? this.props.users.items.data.data : null;
        if (currentUser && users && users.length > 0) {
            users = users.filter((user) => {
                return user.id !== currentUser.id;
            })
        }
        return (
            <div>
                <Header component="Home" title="Clean Blog" subheading="A Blog Theme by Start Bootstrap"/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
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
    return {
        currentUser,
        users
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getAll, getCurrentUser}, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
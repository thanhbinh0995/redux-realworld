import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Header from "../common/Header";
import {loadArticles} from "../../actions/articleAction";
import {withRouter} from "react-router-dom";
import {getCurrentUser} from "../../actions/user.actions";
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  componentWillMount() {
    this.props.loadArticles();
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
            <p className="post-meta">Posted by <a href="#">{article.author.username}</a> on {new Date(article.createdAt).toUTCString()}</p>
          </div>
      );
    });
  }

  render() {
    const {articles} = this.props;
    return (
        <div>
          <Header component="Home" title="Clean Blog" subheading="A Blog Theme by Start Bootstrap"/>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                {this.renderArticles(articles)}
                <hr />
                <div className="clearfix">
                  <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  const {articles} = state;
  return {
    articles
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({loadArticles, getCurrentUser}, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
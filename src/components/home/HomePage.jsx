import React from "react";
import {connect} from "react-redux";
import Header from "../common/Header";
import Nav from "../common/Nav";
import Footer from "../common/Footer";

class HomePage extends React.Component {
  renderArticles(articles) {
    return articles.map((article, index) => {
      return (
          <div className="post-preview" key={index}>
            <a href="/article">
              <h2 className="post-title">{article.title}</h2>
              <h3 className="post-subtitle">{article.description}</h3>
            </a>
            <p className="post-meta">Posted by <a href="#">{article.author.username}</a> on {article.createdAt}</p>
          </div>
      );
    });
  }

  render() {
    const {user, articles} = this.props;
    return (
        <div>
          <Nav user={user}/>
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
          <Footer />
        </div>
    );
  }
}

function mapStateToProps(state) {
  const {authentication, articles} = state;
  const {user} = authentication;
  return {
    user,
    articles
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export {connectedHomePage as HomePage};
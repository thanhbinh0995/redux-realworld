import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { createArticle } from "../../actions/articleAction";
import Home from "../../style/img/home-bg.jpg";
import {withRouter} from "react-router-dom";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: '',
        description: '',
        body: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { article } = this.state;
    this.setState({
      article: {
        ...article,
        [name]: value
      }
    });
  }

  handleSubmitForm(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { article } = this.state;
    if (article.title && article.body && article.description) {
      this.props.createArticle(article);
    }
  }

  render() {
    const { article, submitted } = this.state;
    return (
      <div>
        <header className="masthead" style={{ backgroundImage: 'url(' + Home + ')' }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-md-10 mx-auto">
                <div className="page-body">
                  <div className="container" style={{ padding: "100px 0" }}>
                    <h2>Create New Post</h2>
                    <form name="formSubmit" onSubmit={this.handleSubmitForm}>
                      <div className={'form-group' + (submitted ? ' has-error' : '')}>
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" name="title" value={article.title}
                          onChange={this.handleChange} />
                        {submitted &&
                          <div className="help-block">Title is required</div>
                        }
                      </div>
                      <div className={'form-group' + (submitted ? ' has-error' : '')}>
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" name="description" value={article.description}
                          onChange={this.handleChange} />
                        {submitted &&
                          <div className="help-block">Description is required</div>
                        }
                      </div>
                      <div className={'form-group' + (submitted ? ' has-error' : '')}>
                        <label htmlFor="body">Body</label>
                        <input type="text" className="form-control" name="body" value={article.body}
                          onChange={this.handleChange} />
                        {submitted &&
                          <div className="help-block">Body is required</div>
                        }
                      </div>
                      <div className="form-group">
                        <button className="btn btn-primary">Create Post</button>
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
  return {
    alert,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createArticle }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Editor));

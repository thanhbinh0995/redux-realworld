import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getArticle} from "../../actions/articleAction";
import {withRouter} from "react-router-dom";

class Article extends React.Component {
    componentWillMount() {
        this.props.getArticle(this.props.match.params.id);
    }

    render() {
        if (!this.props.article) {
            return null;
        }
        return (
            <div className="article-page">
                <div className="banner">
                    <div className="container">
                        <h1>{this.props.article.title}</h1>
                    </div>
                </div>
                <div className="container page">
                    <div className="row article-content">
                        <div className="col-xs-12">
                            <p>{this.props.article.description}</p>
                            <ul className="tag-list">
                                {
                                    this.props.article.tagList && this.props.article.tagList.map(tag => {
                                        return (
                                            <li
                                                className="tag-default tag-pill tag-outline"
                                                key={tag}>
                                                {tag}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {article} = state;
    return {
        article,
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({getArticle}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Article));

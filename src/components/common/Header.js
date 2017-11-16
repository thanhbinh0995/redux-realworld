import React from 'react';
import Contact from '../../../style/img/contact-bg.jpg';
import About from '../../../style/img/about-bg.jpg';
import Home from '../../../style/img/home-bg.jpg';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let bg;
    switch (this.props.component) {
      case "Home":
        bg = Home;
        break;
      case "About":
        bg = About;
        break;
      case "Contact":
        bg = Contact;
        break;
      default:
        bg = Home;
        break;
    }
    return (
      <header className="masthead" style={{ backgroundImage: 'url(' + bg + ')' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="page-heading">
                <h1>{this.props.title}</h1>
                <span className="subheading">{this.props.subheading}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

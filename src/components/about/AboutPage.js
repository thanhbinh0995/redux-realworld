import React from 'react';
import Header from '../common/Header';
import Nav from '../common/Nav';
import Footer from '../common/Footer';
import { connect } from 'react-redux';

class AboutPage extends React.Component {
  render() {
    return (
        <div>
          <Nav user={this.props.user}/>
          <Header component="About" title="About Me" subheading="This is what I do."/>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <p>You are encouraged to consult with a professional legal and tax advisors concerning your specific circumstances. Arise disclaims all liability to any person in respect of anything done or omitted to be done wholly or in part in reliance on the information contained herein</p>
                <p>
                St. Charles is a vibrant Catholic community serving Imperial Beach and the South Bay. We believe in the real presence of Jesus Christ in the Eucharist and His saving grace received through the Sacraments. We believe in the Holy Catholic Church instituted by Jesus, the sanctity of life, the value of family, and life-long Catholic education for all ages. We live to deepen our love of God, spread His Gospel and bring others to Christ. We are committed to a life of prayer, sacrifice, and service to those in need. With love, humility, and joyful obedience, we strive to be transformed and guided by the Holy Spirit until we are transformed in the eternal life of Heaven.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.authentication;
  return {
      user,
  };
}
const connectedAboutPage = connect(mapStateToProps)(AboutPage);
export { connectedAboutPage as AboutPage };

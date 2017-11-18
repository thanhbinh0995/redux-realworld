import React from "react";
import { connect } from "react-redux";
import Nav from "../common/Nav";
import Footer from "../common/Footer";

class ProfileEditPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Nav user={user} />
        <section id="contact">
          <div className="contact-section" style={{paddingTop: "100px"}}>
            <div className="container">
              <form>
                <div className="col-md-6 form-line">
                  <div className="form-group">
                    <label htmlFor="exampleInputUsername">Your name</label>
                    <input type="text" className="form-control" id="" placeholder=" Enter Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail">Email Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail"
                      placeholder=" Enter Email id" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telephone">Mobile No.</label>
                    <input type="tel" className="form-control" id="telephone"
                      placeholder=" Enter 10-digit mobile no." />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="description"> Message</label>
                    <textarea className="form-control" id="description" placeholder="Enter Your Message"></textarea>
                  </div>
                  <div>
                    <button type="button" className="btn btn-default submit"><i className="fa fa-paper-plane"
                      aria-hidden="true"></i> Send Message
                      </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.authentication;
  return {
    user
  };
}

const connectedProfileEditPage = connect(mapStateToProps)(ProfileEditPage);
export { connectedProfileEditPage as ProfileEditPage };
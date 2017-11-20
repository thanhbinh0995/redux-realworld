import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        test
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import Nav from './components/common/Nav';
import Footer from './components/common/Footer';
import Routes from './routes/';
import { store } from "./helpers";

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div className="app-container">
        <Nav />
        <main>
          <Routes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// Enable hot relading
module.hot.accept();

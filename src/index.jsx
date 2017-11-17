import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import { App } from './components/App';
import {loadArticles} from './actions/articleAction';

// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();
store.dispatch(loadArticles());


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
import React from 'react';
import { hydrate } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import App from './../components/App';
import rootReducer from './../state/reducers';
import { FetchContext } from './../context/fetch';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, window.__PRELOADED_STATE__);

const fetches = [];

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <FetchContext.Provider value={fetches}>
                <App />
            </FetchContext.Provider>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root'),
    () => {
        delete window.__PRELOADED_STATE__;
    },
);

import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './../components/App';
import rootReducer from './../state/reducers';

export const serverAppRenderer = () => {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    const store = createStoreWithMiddleware(rootReducer);

    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    return {
        html,
    }
}

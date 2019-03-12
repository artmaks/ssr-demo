import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';

import App from './../components/App';
import rootReducer from './../state/reducers';

export const serverAppRenderer = (req) => {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    const store = createStoreWithMiddleware(rootReducer);

    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <App />
            </StaticRouter>
        </Provider>
    );

    return {
        html,
    }
}

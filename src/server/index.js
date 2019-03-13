import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { StaticRouter } from 'react-router-dom';

import App from './../components/App';
import rootReducer from './../state/reducers';
import { FetchContext } from './../context/FetchContext';

export const serverAppRenderer = (req) => {
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    const store = createStoreWithMiddleware(rootReducer);

    const fetches = [];

    const AppForRender = (
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <FetchContext.Provider value={fetches}>
                    <App />
                </FetchContext.Provider>
            </StaticRouter>
        </Provider>
    );

    renderToString(AppForRender);

    return Promise.all(fetches).then(() => {
        const html = renderToString(AppForRender);
        const preloadedState = store.getState();

        return {
            html,
            preloadedState,
        };
    });
}

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createHashHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, routerActions } from 'connected-react-router';

import createRootReducer from '../reducers';
import * as counterActions from '../actions/counter';

const history = createHashHistory();

const rootReducer = createRootReducer(history);

const configureStore = initialState => {
    // Redux Configuration
    const middleware = [];

    // Thunk Middleware
    middleware.push(thunk);

    // Logging Middleware
    const logger = createLogger({
        level: 'info',
        collapsed: true,
    });

    // Skip redux logs in console during the tests
    if (process.env.NODE_ENV !== 'test') {
        middleware.push(logger);
    }

    // Router Middleware
    const router = routerMiddleware(history);
    middleware.push(router);

    // Redux DevTools Configuration
    const actionCreators = {
        ...counterActions,
        ...routerActions,
    };

    // Create Store
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(actionCreators, ...middleware)),
    );

    if (module.hot) {
        module.hot.accept(
            '../reducers',
            // eslint-disable-next-line global-require
            () => store.replaceReducer(require('../reducers').default),
        );
    }

    return store;
};

export default { configureStore, history };

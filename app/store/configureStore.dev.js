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
    const middlewares = [];

    // Thunk Middleware
    middlewares.push(thunk);

    // Logging Middleware when environment is not test
    if (process.env.NODE_ENV !== 'test') {
        middlewares.push(
            createLogger({
                level: 'info',
                collapsed: true,
            }),
        );
    }

    // Router Middleware
    middlewares.push(routerMiddleware(history));

    const composeEnhancers = composeWithDevTools({
        actionCreators: {
            ...counterActions,
            ...routerActions,
        },
    });

    // Create Store
    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

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

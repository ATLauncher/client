import React from 'react';
import { History } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import Routes from '../Routes';

interface IProps {
    store: any;
    history: History<any>;
}

const Root: React.SFC<IProps> = ({ store, history }) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>
);

export default Root;

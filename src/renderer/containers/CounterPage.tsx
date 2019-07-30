import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import CounterActions from '../actions/counter';

import Counter from '../components/Counter';

export interface ICounterState {
    counter: number;
}

function mapStateToProps(state: ICounterState) {
    return {
        counter: state.counter,
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(CounterActions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);

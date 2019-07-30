export enum CounterTypeKeys {
    INCREMENT_COUNTER = 'INCREMENT_COUNTER',
    DECREMENT_COUNTER = 'DECREMENT_COUNTER',
}

interface IIncrementAction {
    type: CounterTypeKeys.INCREMENT_COUNTER;
}

interface IDecrementAction {
    type: CounterTypeKeys.DECREMENT_COUNTER;
}

export type CounterTypes = IIncrementAction | IDecrementAction;

export function increment() {
    return {
        type: CounterTypeKeys.INCREMENT_COUNTER,
    };
}

export function decrement() {
    return {
        type: CounterTypeKeys.DECREMENT_COUNTER,
    };
}

export function incrementIfOdd() {
    return (dispatch, getState) => {
        const { counter } = getState();

        if (counter % 2 === 0) {
            return;
        }

        dispatch(increment());
    };
}

export function incrementAsync(delay = 1000) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment());
        }, delay);
    };
}

export default { increment, decrement, incrementIfOdd, incrementAsync };

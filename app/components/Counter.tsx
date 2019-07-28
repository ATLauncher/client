import React from 'react';
import { Link } from 'react-router-dom';

// tslint:disable-next-line:no-var-requires
const routes = require('../constants/routes.json');

// tslint:disable-next-line:no-var-requires
const styles = require('./Counter.css');

interface IProps {
    increment: () => void;
    incrementIfOdd: () => void;
    incrementAsync: () => void;
    decrement: () => void;
    counter: number;
}

const Counter: React.SFC<IProps> = ({ increment, incrementIfOdd, incrementAsync, decrement, counter }) => (
    <div>
        <div className={styles.backButton} data-tid="backButton">
            <Link to={routes.HOME}>
                <i className="fa fa-arrow-left fa-3x" />
            </Link>
        </div>
        <div className={`counter ${styles.counter}`} data-tid="counter">
            {counter}
        </div>
        <div className={styles.btnGroup}>
            <button className={styles.btn} onClick={increment} data-tclass="btn" type="button">
                <i className="fa fa-plus" />
            </button>
            <button className={styles.btn} onClick={decrement} data-tclass="btn" type="button">
                <i className="fa fa-minus" />
            </button>
            <button className={styles.btn} onClick={incrementIfOdd} data-tclass="btn" type="button">
                odd
            </button>
            <button className={styles.btn} onClick={() => incrementAsync()} data-tclass="btn" type="button">
                async
            </button>
        </div>
    </div>
);

export default Counter;

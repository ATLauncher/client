import React from 'react';
import { Link } from 'react-router-dom';

// tslint:disable-next-line:no-var-requires
const routes = require('../constants/routes.json');

// tslint:disable-next-line:no-var-requires
const styles = require('./Home.css');

// tslint:disable-next-line:no-empty-interface
interface IProps {}

const Home: React.SFC<IProps> = () => (
    <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
    </div>
);

export default Home;

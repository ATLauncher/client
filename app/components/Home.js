import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../constants/routes';

import styles from './Home.css';

const Home = () => (
    <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
    </div>
);

export default Home;

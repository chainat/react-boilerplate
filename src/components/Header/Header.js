import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => (
    <div className={styles.headerWrapper}>
      <h1>React Boilerplate</h1>
      <h3 className={styles.date}>Date: {Date()}</h3>
      <div className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/demo-page">Demo Page</Link>
      </div>
      <hr/>
    </div>
);

export default Header;

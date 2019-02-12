import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import HomePage from './containers/HomePage';
import DemoPage from './containers/DemoPage';

export default () => (
  <div>
    <Header />
    <Route exact path="/" component={HomePage} />
    <Route path="/demo-page" component={DemoPage}/>
  </div>
);

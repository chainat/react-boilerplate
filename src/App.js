import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import HomePage from './containers/HomePage';
import DemoPage from './containers/DemoPage';

const App = () => (
  <div>
    <Header/>
    <Route exact path="/" component={HomePage}/>
    <Route path="/demo-page" component={DemoPage}/>
  </div>
);

export default App;

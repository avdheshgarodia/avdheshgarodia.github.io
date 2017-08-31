import React from 'react';
import Header from './Header';
import Main from './Main';

import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Main />
    </div>
  </BrowserRouter>
);

export default App;

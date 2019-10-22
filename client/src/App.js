import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import './App.css';

const App =() => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About}/>
        </Switch>
      </div>
    </>
  );
}

export default App;

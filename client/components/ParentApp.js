import React, { Component } from 'react';
import { Form, Button, ButtonControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FightApp from './FightApp';
import App from './App';
import LoveApp from './LoveApp';

class ParentApp extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <Router>
        <div>
          <Route exact path='/' component={App}/>
          <Route path='/fighter' component={FightApp}/>
          <Route path='/lover' component={LoveApp}/>
        </div>
      </Router>
    )
  }
}

export default ParentApp;

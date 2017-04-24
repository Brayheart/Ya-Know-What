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
          {/*<Route path='/lover' component={LoveApp}/>*/}
        </div>
      </Router>
    )
  }
}

export default ParentApp;
          
          
          
          
          
          
//<div style={{textAlign:'center'}}>
  // <h1>Ya Know What?!</h1>
  // <br/>
  // <Link to="/fighter">
    // <Button bsStyle="primary" type="submit">
      // Fighter
    // </Button>
  // </Link>
  // <br/>
  // <br/>
  // {/*<Link>*/}
    // <Button bsStyle="primary" type="submit">
      // Lover
    // </Button>
  // {/*</Link>*/}
  // <Route path="/fighter" component={FightApp}></Route>
// </div>
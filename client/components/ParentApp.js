import React, { Component } from 'react';
import { Form, Button, ButtonControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';

class ParentApp extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <Router>
        <Route exact path='/'>
          <div style={{textAlign:'center'}}>
            <h1>Ya Know What?!</h1>
            <br/>
            <Link to="/fighter">
              <Button bsStyle="primary" type="submit">
                Fighter
              </Button>
            </Link>
            <br/>
            <br/>
            {/*<Link>*/}
              <Button bsStyle="primary" type="submit">
                Lover
              </Button>
            {/*</Link>*/}
            <Route path="/fighter" component={App}></Route>
          </div>
        </Route>  
      </Router>
    )
  }
}

export default ParentApp;
import React, { Component } from 'react';
import { Form, Button, ButtonControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FightApp from './FightApp';
import LoveApp from './LoveApp';
import '../../node_modules/sweetalert/dist/sweetalert.css'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div style={{textAlign:'center'}}>
        <h1>Ya Know What?!</h1>
        <br/>
        <Link to="/lover">
          <Button bsStyle="primary" type="submit">
            Lover
          </Button>
        <br/>
        <br/>
        <Link to="/fighter">
          <Button bsStyle="primary" type="submit">
            Fighter
          </Button>
        </Link>
        </Link>
      </div>
    )
  }
}

export default App;
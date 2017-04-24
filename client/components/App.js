import React, { Component } from 'react';
import { Form, Button, ButtonControl } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return(
      <div style={{textAlign:'center'}}>
        <h1>Ya Know What?!</h1>
        <br/>
        <Form>
          <input type="text" name="name" placeholder="  Who Needs To Know??"/>
          <br/>
          <br/>
          <input type="text" name="from" placeholder="    Who's Telling Em??"/>
        </Form>
          <br/>
        <Button bsStyle="primary" type="submit">
          Submit
        </Button>
      </div>  
    )
  }
}

export default App;
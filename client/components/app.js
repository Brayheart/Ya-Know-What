import React, { Component } from 'react';
import { Form, Button, ButtonControl } from 'react-bootstrap';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      responses: [],
      from: 'Me',
      name: 'You',
    }
    this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    axios.get('http://www.foaas.com/operations')
    .then(res => { 
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return(
       <div style={{textAlign: 'center'}}>
         <h1>Ya Know What?!</h1><br/>
        <Form>
          <input type="text" name="name" placeholder="  Who Needs to Know??"/><br/><br/>
          <input type="text" name="name" placeholder="     Who's Telling 'Em??"/><br/><br/>
          <Button bsStyle="primary" type="submit" onSubmit={this.handleSubmit}>
            Response
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;
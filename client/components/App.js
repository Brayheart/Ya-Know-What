import React, { Component } from 'react';
import { Form, Button, ButtonControl } from 'react-bootstrap';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      url: [],
      responses: []
    }
  }

  componentDidMount() {
    axios.get('http://www.foaas.com/operations')
         .then(res => {
           console.log(res.data)
           console.log(res.data[1].url.includes(':name' && ':from'));
           console.log(res.data[2].url.includes(':from' && ':name'));
           let arr = res.data.filter(data => {
            //  console.log(data);
            //  console.log(data.url);
             return data.url.includes(':name')
           })
           console.log(arr);
         })
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
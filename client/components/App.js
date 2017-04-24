import React, { Component } from 'react';
import { Form, Button, ButtonControl } from 'react-bootstrap';
import axios from 'axios';
import _ from 'lodash';

class App extends Component {
  constructor() {
    super()

    this.state = {
      hatefulUrls: [],
      responses: []
    }
  }

  componentDidMount() {
    axios.get('http://www.foaas.com/operations')
         .then(res => {
           let urls = res.data.filter(data => {
             return data.url.includes(':name')
           })
           _.each(urls, url => {
             this.setState({hatefulUrls: [...this.state.hatefulUrls, url.url]})
           })
           console.log(this.state.hatefulUrls)
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
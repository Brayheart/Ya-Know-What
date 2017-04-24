import React, { Component } from 'react';
import { Form, Button, ButtonControl } from 'react-bootstrap';
import axios from 'axios';
import _ from 'lodash';

class App extends Component {
  constructor() {
    super()

    this.state = {
      hatefulUrls: [],
      lovingUrls: ['/you/:name/:from','/donut/:name/:from', '/shakespeare/:name/:from', '/war/:name/:from', '/slowly/:name/:from', '/aristotle/:name/:from'],
      responses: [],
      name: '',
      from: ''
    }

    this.nameChange = this.nameChange.bind(this);
    this.fromChange = this.fromChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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
         })
  }

  nameChange(event) {
    this.setState({name: event.target.value});
    console.log(this.state.name)
  }
  
  fromChange(event) {
    this.setState({from: event.target.value});
    console.log(this.state.from);
  }

  // handleSubmit(event){
  //   event.preventDefault();
  //   axios.get('http://www.foaas.com/' + this.state.hatefulUrls[Math.floor(Math.random()*this.state.hatefulUrls.length)] + )

  // }

  render() {
    return(
      <div style={{textAlign:'center'}}>
        <h1>Ya Know What?!</h1>
        <br/>
        <Form>
          <input onChange={this.nameChange} type="text" name="name" placeholder="  Who Needs To Know??"/>
          <br/>
          <br/>
          <input onChange={this.fromChange} type="text" name="from" placeholder="    Who's Telling Em??"/>
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
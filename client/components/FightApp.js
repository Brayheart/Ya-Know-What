import React, { Component } from 'react';
import { Form, Button, ButtonControl } from 'react-bootstrap';
import axios from 'axios';
import _ from 'lodash';
import FightResponseList from './FightResponseList';

class FightApp extends Component {
  constructor() {
    super()

    this.state = {
      hatefulUrls: [],
      responses: [],
      name: '',
      from: ''
    }

    this.nameChange = this.nameChange.bind(this);
    this.fromChange = this.fromChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  }
  
  fromChange(event) {
    this.setState({from: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    let hate = this.state.hatefulUrls[Math.floor(Math.random()*this.state.hatefulUrls.length)];
    hate = hate.replace(':name', this.state.name);
    hate = hate.replace(':from', this.state.from);
    axios.get('http://www.foaas.com' + hate)
    .then(res => {
      this.setState({responses: [...this.state.responses, res.data.message]});
      console.log(res.data.message);
      console.log(this.state.responses)
    }).catch(err => {
      console.log('Err in handleSubmit: ', err);
    });

  }

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
        <Button onClick={this.handleSubmit} bsStyle="primary" type="submit">
          Submit
        </Button>
        <br/>
        <FightResponseList responses={this.state.responses}/>
      </div>  
    )
  }
}

export default FightApp;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Button, ButtonControl } from 'react-bootstrap';
import axios from 'axios';
import _ from 'lodash';
import LoveResponseList from './LoveResponseList';
import FightApp from './FightApp';

class LoveApp extends Component {
  constructor() {
    super()

    this.state = {
      lovingUrls: ['I Love you, :name. - :from', 'Everyone can go and love one another. - :name', ':name, I Love You like 100 donuts. - :from', ':name, Love looks not with the eyes, but with the mind, and therefore is winged Cupid painted blind - :from', 'Make Love, not war :name, you are fucking thick. - :from', 'Love me gentle, Love me slowly :name. - :from', ':name, Love is composed of a single soul inhabiting two bodies. - :from'],
      responses: [],
      name: '',
      from: '',
      count: 0
    }

    this.nameChange = this.nameChange.bind(this);
    this.fromChange = this.fromChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nameChange(event) {
    this.setState({name: event.target.value});
  }
  
  fromChange(event) {
    this.setState({from: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    let love = this.state.lovingUrls[Math.floor(Math.random()*this.state.lovingUrls.length)];
    love = love.replace(':name', this.state.name);
    love = love.replace(':from', this.state.from);
    this.setState({responses: [...this.state.responses, love]});
    this.setState({count: this.state.count += 1})
    if(this.state.count === 3) {
        alert("You're a bit too chipper");
        ReactDOM.render(<FightApp />, document.getElementById('app'));
      }
  }

  render() {
    return(
      <div style={{textAlign:'center'}}>
        <h1>Ya Know What?!</h1>
        <br/>
        <h2>Love</h2>
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
        <br/>
        <LoveResponseList responses={this.state.responses}/>
      </div>  
    )
  }
}

export default LoveApp;
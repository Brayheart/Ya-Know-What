import React, { Component } from 'react';
import { Form, Button, ButtonControl } from 'react-bootstrap';
import axios from 'axios';
import _ from 'lodash';
import LoveResponseList from './LoveResponseList';

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

  // componentDidMount() {
  //   axios.get('http://www.foaas.com/operations')
  //        .then(res => {
  //          let urls = res.data.filter(data => {
  //            return data.url.includes(':name')
  //          })
  //          _.each(urls, url => {
  //            this.setState({hatefulUrls: [...this.state.hatefulUrls, url.url]})
  //          })
  //        })
  // }

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
    // axios({
    //   method: 'get',
    //   url: 'http://laas.herokuapp.com' + love,
    //   headers: {
    //     'Accept': 'text/plain',
    //     'Access-Control-Allow-Origin': '*'
    //     // 'Content-Type': 'application/json',
    //   }
    // }).then(res => {
    //   this.setState({responses: [...this.state.responses, res.data.message]});
    //   console.log(res.data.message);
    //   console.log(this.state.responses)
    // }).catch(err => {
    //   console.log('Err in handleSubmit: ', err);
    // });
    this.setState({responses: [...this.state.responses, love]});
    this.setState({count: this.state.count += 1})
    console.log(this.state.count)
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
        <LoveResponseList responses={this.state.responses}/>
      </div>  
    )
  }
}

export default LoveApp;
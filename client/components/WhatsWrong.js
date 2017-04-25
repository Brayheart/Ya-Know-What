import React, { Component } from 'react';
import { Form, Button, ButtonControl } from 'react-bootstrap';
import axios from 'axios';
import WWList from './WWList';

class WhatsWrong extends Component {
  constructor() {
    super()

    this.state = {
      rants: [],
      rant: ''
    }

    this.rantSubmit = this.rantSubmit.bind(this)
    this.rantChange = this.rantChange.bind(this)
  }

  componentDidMount() {
    axios.get('/response')
         .then(res => {
           console.log(res);
           for(var i = 0 ; i < res.data.length ; i++){
              this.setState({rants: [res.data[i].response, ...this.state.rants]});
            }
           })
         .catch(err => {
            console.log('Error in CDM WW: ', err);
         })
      }

  rantSubmit(event) {
    event.preventDefault();
    axios.post('/response', {
      response: this.state.rant
    }).then(data => {
      console.log(data);
      this.setState({rants: [this.state.rant, ...this.state.rants]});
      this.render();
    }).catch(err => {
      console.log('Error in rantSubmit: ', err);
    })
  }

  rantChange(event) {    
    this.setState({rant: event.target.value});
  }

  render() {
    return(
      <div style={{textAlign: 'center'}}>
        <h1>What's Wrong?</h1>
        <br/>
        <Form>
          <input onChange={this.rantChange} type='text' name='rant' placeholder='     Shhh Safe Space'/>
        </Form>
        <br/>
        <Button onClick={this.rantSubmit} bsStyle="primary" type="submit">
          Release
        </Button>
        <br/>
        <br/>
        <WWList rants={this.state.rants}/>
      </div>
    )
  }
}

export default WhatsWrong;
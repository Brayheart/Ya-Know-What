import React, { Component } from 'react';
import { Form, Button, ButtonControl } from 'react-bootstrap';

class WhatsWrong extends Component {
  constructor() {
    super()

    this.state = {
      rantArr: [],
      rant: ''
    }
  }

  componentDidMount() {
    axios.get('/response', (err, data) => {
      if(err) {
        console.log('CDM WW ERROR: ', err);
      } else {
        console.log(data);
        this.setState({rantArr: [...this.state.rantArr, data]});
      }
    })
  }

  rantSubmit(event) {
    event.preventDefault();
    axios.post('response', () => {
      response: 
    })
  }

  render() {
    return(
      <div style={{textAlign: 'center'}}>
        <h1>What's Wrong?</h1>
        <br/>
        <Form>
          <input onChange={} type='text' name='rant' placeholder='     Shhh Safe Space'/>
        </Form>
        <br/>
        <Button bsStyle="primary" type="submit">
          Release
        </Button>
      </div>
    )
  }
}

export default WhatsWrong;
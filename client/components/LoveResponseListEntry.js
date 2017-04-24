import React from 'react';
import { Well } from 'react-bootstrap';

const LoveResponseListEntry = (props) => {
  return(
    <Well>
      <div>{props.response}</div>
    </Well>
  )
}

export default LoveResponseListEntry;
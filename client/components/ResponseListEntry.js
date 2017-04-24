import React from 'react';
import { Well } from 'react-bootstrap';

const ResponseListEntry = (props) => {
  return(
    <Well>
      <div>{props.response}</div>
    </Well>
  )
}

export default ResponseListEntry;
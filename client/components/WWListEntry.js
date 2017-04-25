import React from 'react';
import { Well } from 'react-bootstrap';

const WWListEntry = (props) => {
  return(
    <Well>
      <div>{props.rant}</div>
    </Well>
  )
}

export default WWListEntry;
import React from 'react';
import { Well } from 'react-bootstrap';

const FightResponseListEntry = (props) => {
  return(
    <Well>
      <div>{props.response}</div>
    </Well>
  )
}

export default FightResponseListEntry;
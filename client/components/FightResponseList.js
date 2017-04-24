import React from 'react';
import FightResponseListEntry from './FightResponseListEntry';

const FightResponseList = (props) => {
  return(
    <div>
      {props.responses.map(response => 
        <FightResponseListEntry response={response}/>
      )}
    </div>
  ) 
}

export default FightResponseList;
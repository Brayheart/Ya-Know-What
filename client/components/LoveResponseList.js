import React from 'react';
import LoveResponseListEntry from './LoveResponseListEntry';

const LoveResponseList = (props) => {
  return(
    <div>
      {props.responses.map(response => 
        <LoveResponseListEntry response={response}/>
      )}
    </div>
  ) 
}

export default LoveResponseList;
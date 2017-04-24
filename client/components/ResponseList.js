import React from 'react';
import ResponseListEntry from './ResponseListEntry';

const ResponseList = (props) => {
  return(
    <div>
      {props.responses.map(response => 
        <ResponseListEntry response={response}/>
      )}
    </div>
  ) 
}

export default ResponseList;
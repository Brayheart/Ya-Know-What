import React from 'react';
import WWListEntry from './WWListEntry';

const WWList = (props) => {
  return(
    <div>
      {props.rants.map(rant => 
        <WWListEntry rant={rant}/>
      )}
    </div>
  )
}

export default WWList;
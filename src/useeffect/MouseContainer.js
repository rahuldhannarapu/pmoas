import React from 'react'
import {useState} from 'react'
import MouseEx from './MouseEx';
const MouseContainer = () => {
    const [display,setDisplay]=useState(true);
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle display</button>
        {display && <MouseEx></MouseEx>}


    </div>
  )
}

export default MouseContainer;




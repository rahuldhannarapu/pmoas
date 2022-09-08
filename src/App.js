import React from 'react';
import {useState } from 'react';

const App = () => {
  const [count,setCount]=useState(0)
  const increment=()=>{
    for(let i=0;i<5;i++){
      setCount(p=>p+1);
    }
  }
  return (
    <div>
      <button onClick={increment}>count{count}</button>
    </div>
  )
}

export default App
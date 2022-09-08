import React from 'react'
import {useState,useEffect} from 'react'
const EffectEx = () => {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');

    useEffect(()=>{
        console.log("updated");

        document.title=`clicked ${count} times`;
    },[count])
  return (
    <div>
        <input value={name} onChange={e=>setName(e.target.value)}></input>
        <button on onClick={()=>setCount(count+1)}>click</button>
        <h2>{count}</h2>
    </div>
  )
}

export default EffectEx
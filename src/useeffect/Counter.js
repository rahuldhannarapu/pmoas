import React from 'react'
import {useState,useEffect} from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
    const tick=()=>{
        setCount(count +1);
    }
    useEffect(()=>{
        const interval = setInterval(tick,10000);
        return ()=>{
            clearInterval(interval)
        }
    })
  return (
    <div>{count}</div>
  )
}

export default Counter
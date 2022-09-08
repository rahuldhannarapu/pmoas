import React, { useEffect } from 'react';
import { useState } from 'react';
const Usereff = () => {
    const [timer,setTimer]=useState(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1);


        },1000)
        return () =>{
            clearInterval(interval)
        }
    },[])
    
  return (
    <div>
        <h2>time :{timer}</h2>



        <button onClick={()=>clearInterval(interval)}>stop</button>
    </div>
 
  )
}

export default Usereff;
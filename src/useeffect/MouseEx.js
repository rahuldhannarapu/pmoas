import React from 'react'
import {useEffect,useState} from 'react'

const MouseEx = () => {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);
    const logMouseosition=(e)=>{
        console.log("mouse event")
        setX(e.clientX);
        setY(e.clientY);

    }

    useEffect(()=>{
        console.log("useeffect called")
        window.addEventListener('mousemove' ,logMouseosition);
        return()=>{
            console.log('component unmounting code');
            window.removeEventListener('mousemove',logMouseosition)
        }
    },[])
  return (
    <div>
        <h2>x position :{x} y position: {y}</h2>
    </div>
  )
}

export default MouseEx
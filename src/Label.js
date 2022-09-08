import React from 'react'
import {useState} from 'react'

const Label = () => {
    const [data,setData]=useState({
        fname:'',
        lname:''
    })
  return (
    <div>

        <input value={data.fname} onChange={(e)=>setData({...data,fname:e.target.value})}></input>
        <input value={data.lname} onChange={(e)=>setData({...data,lname:e.target.value})}></input>
        <h2>fname {data.fname}</h2>
        <h2>lname {data.lname}</h2>


    </div>
  )
}

export default Label;
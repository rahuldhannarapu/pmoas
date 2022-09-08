import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const FetchRed = () => {
    const[loading,setLoading]=useState(true)
    const[error,setError]=useState('')
    const[post,setPost]=useState({})
    useEffect(()=>{

        axios.get(`http://localhost:3011/users/1`).then((res)=> {console.log(res)
        setError('');
        setLoading(false);
        setPost(res.data)
       })
        .catch(error=>{
            setError("something")
            setLoading(false)
            setPost({})
        })
        
     },[] )

  return (
    <div>FetchRed

        {loading?'loading':post.name}
        {error?error:null}
    </div>
  )
}

export default FetchRed
import React, { useEffect, useState } from 'react'
import axios from 'axios';
const FetchEffect = () => {
    const[post,setPost]=useState({});
    const [id,setId]=useState(1);
    const [buttonid,setButtonId]=useState();
    useEffect(()=>{
        axios.get(`http://localhost:3011/users/${buttonid}`).then((res)=> {console.log(res)
        setPost(res.data)})
        .catch(error=>{
            console.log(error)
        })

        

    },[buttonid])
    const handleChange=()=>{
        setButtonId(id)
    }
  return (
    <div>FetchEffect
        <input value={id} onChange={e=>setId(e.target.value)} ></input>
        <button onClick={handleChange} />
        <div>{post.name}</div>
        {/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.name}</li>
				))}
			</ul> */}
    </div>
  )
}

export default FetchEffect
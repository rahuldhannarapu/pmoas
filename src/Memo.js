import React, { useState ,useMemo} from 'react'

function Memo() {
    const [countone,setCountone]=useState(0);
    const [counttwo,setCounttwo]=useState(0);
    const Incone=()=>{
        setCountone(countone+1);

    }
    const Inctwo=()=>{
        setCounttwo(counttwo+2)
    }
    const isEven= ()=>{
        let i=0;
        while(i<2000000000) i++
        return countone %2 ===0;
    }


  return (
    <div>
        <h2>{countone}</h2>
        <button onClick={Incone}>one</button>
        <span>{isEven?'even':'odd'}</span>
        <h2>{counttwo}</h2>
        <button onClick={Inctwo}>two</button>
    </div>
  )
}

export default Memo
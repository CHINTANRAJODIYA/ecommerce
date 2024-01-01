import React from 'react';
import { useState } from "react";


function Result() {

    const [stu,setstu]=useState([{}]);
   const [maths,setmaths]=useState();
   const [sci,setsci]=useState();
   const [guj,setguj]=useState();
   const [eng,seteng]=useState();
   const [hindi,sethindi]=useState();
   const [marks,setmarks]=useState();
   const [per,setper]=useState();

//    const [total,settotal]=useState();

   const total = () =>{
        setmarks(parseInt(maths)+parseInt(sci)+parseInt(guj)+parseInt(eng)+parseInt(hindi));
        setper(parseFloat(marks/5));
        console.log(marks);
   }



  return (
    <>
    MATHS = <input type="text" value={maths} onChange={(e)=>{setmaths(e.target.value)}}/><br></br>
    SCIENCE = <input type="text" value={sci} onChange={(e)=>{setsci(e.target.value)}} /><br></br>
    GUJRATI = <input type="text" value={guj} onChange={(e)=>{setguj(e.target.value)}} /><br></br>
    ENGLISH = <input type="text" value={eng} onChange={(e)=>{seteng(e.target.value)}} /><br></br>
    HINDI = <input type="text"  value={hindi} onChange={(e)=>{sethindi(e.target.value)}} /><br></br>
    <button onClick={total}>TOTAL </button> = <input type="text" value={marks} disabled />
    <input type="text" value={per} disabled/>
   </>
  )
}

export default Result;
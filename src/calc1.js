import { useState } from "react";

function Calc1(){

    const [no1,setno1] = useState();
    const [no2,setno2] = useState();
    const [sign,setsign] = useState();

    const [ans,setans] = useState();
    const btn = (s) => {

        if(s==="+"){
            setans(parseInt(no1)+parseInt(no2));
        }
        else if(s==="-"){
            setans(parseInt(no1)-parseInt(no2));
        }
        else if(s==="*"){
            setans(parseInt(no1)*parseInt(no2));
        }
        if(s==="/"){
            setans(parseInt(no1)/parseInt(no2));
        }
    }


    return(
        <>
            <input type="text" onChange={(e)=>{setno1(e.target.value)}}></input><br></br>
            <input type="text" onChange={(e)=>{setno2(e.target.value)}}></input><br></br>


            <input type="button" value="-" onClick={(e)=>{btn(e.target.value)}}></input>
            <input type="button" value="*" onClick={(e)=>{btn(e.target.value)}}></input>
            <input type="button" value="/" onClick={(e)=>{btn(e.target.value)}}></input>
            <input type="button" value="+" onClick={(e)=>{btn(e.target.value)}}></input>


            <h1>{ans}</h1>

            
            
        </>
    )
}

export default Calc1;
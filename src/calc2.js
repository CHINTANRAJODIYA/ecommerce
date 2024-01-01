import { useState } from "react";

function Calc2(){

    const [no,setno]=useState('');
    const [fval,setfval]=useState('');
    const [sign,setsign]=useState('');

    const num = (n) => {
        setno(no+n)
        if(n==='AC'){
            setno('')
        }
    }
    const action = (s) => {
        setfval(no)
        setno('')
        setsign(s)
    }

    const erase = () =>{
        setno(no.substr(0,(no.length)-1))
    }

    const result = () =>{
        if(sign==='+'){
            setno(parseInt(fval)+parseInt(no));
        }else if(sign==='-'){
            setno(parseInt(fval)-parseInt(no));
        }else if(sign==='/'){
            setno(parseInt(fval)/parseInt(no));
        }else if(sign==='*'){
            setno(parseInt(fval)*parseInt(no));
        }else if(sign==='%'){
            setno(parseInt(fval)%parseInt(no));
        }

    }
    return(
        <>
        <input type="text" disabled value={no}/>
            <div className="calc-grid">

            <input className="grid-btn btn" type="button"  value="AC" onClick={(e)=>{num(e.target.value)}}/>
            <input className="btn" type="button"  value={"%"} onClick={(e)=>{action(e.target.value)}}/>
            <input className="btn" type="button"  value={"/"} onClick={(e)=>{action(e.target.value)}}/>

            
            <input className="btn" type="button"  value={9} onClick={(e)=>{num(e.target.value)}}/>
            <input className="btn" type="button" value={8} onClick={(e)=>{num(e.target.value)}}/>
            <input className="btn" type="button" value={7} onClick={(e)=>{num(e.target.value)}}/>
            <input className="btn" type="button" value={"*"} onClick={(e)=>{action(e.target.value)}}/>

            <input className="btn" type="button" value={6} onClick={(e)=>{num(e.target.value)}}/>
            <input className="btn" type="button" value={5} onClick={(e)=>{num(e.target.value)}}/>
            <input className="btn" type="button" value={4} onClick={(e)=>{num(e.target.value)}}/>
            <input className="btn" type="button" value={"-"} onClick={(e)=>{action(e.target.value)}}/>

            <input className="btn" type="button" value={3} onClick={(e)=>{num(e.target.value)}}/>
            <input className="btn" type="button" value={2} onClick={(e)=>{num(e.target.value)}}/>
            <input className="btn" type="button" value={1} onClick={(e)=>{num(e.target.value)}}/>
            <input className="btn" type="button" value={"+"} onClick={(e)=>{action(e.target.value)}}/>

            <input className="grid-btn btn" type="button"  value={0} onClick={(e)=>{num(e.target.value)}}/>
            <input className="btn" type="button"  value={"<"} onClick={erase}/>
            <input className="btn" type="button"  value={"="} onClick={(e)=>{result(e.target.value)}}/>

            </div>
        </>
    );
};

export default Calc2;
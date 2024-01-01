import { useState } from "react"


function Tictac(){

    const [count,setcount] = useState('0');
    const [won,setwon] = useState('');

    const [b1,setb1]= useState("");
    const [b2,setb2]= useState("");
    const [b3,setb3]= useState("");
    const [b4,setb4]= useState("");
    const [b5,setb5]= useState("");
    const [b6,setb6]= useState("");
    const [b7,setb7]= useState("");
    const [b8,setb8]= useState("");
    const [b9,setb9]= useState("");

    const a1 = (value) =>{
        if(won==""  && count=='0'){
            setb1('X')
            setcount('1');
        }
        else if(value=='' && won==""){
            setb1('0')
            setcount('0');
        }
        win();
    }
    const a2 = (value) =>{
        if(won=='' && count=='0'){
            setb2('X')
            setcount('1');
        }
        else if(value=='' && won==''){
            setb2('0')
            setcount('0');
        }
        win();
    }
    const a3 = (value) =>{
        if(won=='' && count=='0'){
            setb3('X')
            setcount('1');
        }
        else if(value=='' && won==''){
            setb3('0')
            setcount('0');
        }
        win();
    }
    const a4 = (value) =>{
        if(won=='' && count=='0'){
            setb4('X')
            setcount('1');
        }
        else if(value=='' && won==''){
            setb4('0')
            setcount('0');
        }
        win();
    }
    const a5 = (value) =>{
        if(won=='' && count=='0'){
            setb5('X')
            setcount('1');
        }
        else if(value=='' && won==''){
            setb5('0')
            setcount('0');
        }
        win();
    }
    const a6 = (value) =>{
        if(won=='' && count=='0'){
            setb6('X')
            setcount('1');
        }
        else if(value=='' && won==''){
            setb6('0')
            setcount('0');
        }
        win();
    }
    const a7 = (value) =>{
        if(won=='' && count=='0'){
            setb7('X')
            setcount('1');
        }
        else if(value=='' && won==''){
            setb7('0')
            setcount('0');
        }
        win();
    }
    const a8 = (value) =>{
        if(won=='' && count=='0'){
            setb8('X')
            setcount('1');
        }
        else if(value=='' && won==''){
            setb8('0')
            setcount('0');
        }
        win();
    }
    const a9 = (value) =>{
        if(won=='' && count=='0'){
            setb9('X')
            setcount('1');
        }
        else if(value=='' && won==''){
            setb9('0')
            setcount('0');
        }
        win();
    }


    const win = (b) =>{
        if(b1=='X' && b2=='X' && b3=='X' || b1=='X' && b4=='X' && b7=='X' || b1=='X' && b5=='X' && b9=='X' || b2=='X' && b5=='X' && b8=='X'||b3=='X' && b6=='X' && b9=='X'||b3=='X' && b5=='X' && b7=='X'||b4=='X' && b5=='X' && b6=='X' || b7=='X' && b8=='X' && b9=='X'){
            setwon('X IS WIN');
            console.log(b);
        }
        else if(b1=='0' && b2=='0' && b3=='0' || b1=='0' && b4=='0' && b7=='0' || b1=='0' && b5=='0' && b9=='0' || b2=='0' && b5=='0' && b8=='0'||b3=='0' && b6=='0' && b9=='0'||b3=='0' && b5=='0' && b7=='0'||b4=='0' && b5=='0' && b6=='0' || b7=='0' && b8=='0' && b9=='0'){
            setwon('0 IS WIN');
            console.log(b);
        }
    }

    return(
        <>
        <div className="tic-grid">
            <input type="button" value={b1} onClick={(e)=>{a1(e.target.value)}} />
            <input type="button" value={b2} onClick={(e)=>{a2(e.target.value)}} />
            <input type="button" value={b3} onClick={(e)=>{a3(e.target.value)}} />
            <input type="button" value={b4} onClick={(e)=>{a4(e.target.value)}} />
            <input type="button" value={b5} onClick={(e)=>{a5(e.target.value)}} />
            <input type="button" value={b6} onClick={(e)=>{a6(e.target.value)}} />
            <input type="button" value={b7} onClick={(e)=>{a7(e.target.value)}} />
            <input type="button" value={b8} onClick={(e)=>{a8(e.target.value)}} />
            <input type="button" value={b9} onClick={(e)=>{a9(e.target.value)}} />
            </div>

            <h1>{won}</h1>
        </>
    )
}

export default Tictac;

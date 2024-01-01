import { useState } from "react";

function Todo(){
    const [allary,setallary] = useState([]);
    const [ary,setary] = useState();

    const [editid,seteditid]= useState();
    const [isedit,setisedit]= useState(false);

    const add_task = () => {
        if(isedit){
            let newdata=[...allary];
            newdata[editid]=ary;
            setallary(newdata);
            setary('');
            setisedit(false);
        }else{
        setallary([...allary,ary]);
        setary('');
        }
    }
    
    const dlt_task = (dlt_id) => {
        let new_ary = allary.filter((i,j)=>{return j!==dlt_id});
        setallary(new_ary);
    }
    
    const update_task = (upd_id) =>{
        setary(allary[upd_id]);
        setisedit(true);
        seteditid(upd_id);
    }
    return(
        <>
        <input type="text" value={ary} onChange={(e)=>{setary(e.target.value)}}/>
        <input type="button" value={(isedit) ? 'Edit' : 'add task'} onClick={add_task}/>

        <ul>
            {
                allary.map((item,ind)=>{
                    return(
                        <li>{item} <button onClick={()=>{dlt_task(ind)}}>Delete</button><button onClick={()=>{update_task(ind)}}>Update</button></li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default Todo;
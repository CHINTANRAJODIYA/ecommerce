import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Jsonapi() {

    const [postdata,setpostdata]=useState([]);
    
    useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => 
    //     response.json()
    //     )
    //   .then(item =>{
    //     console.log(item);
    //     setpostdata(item);
    // })
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            setpostdata(res.data)
            console.log(res.data)
        })

        .catch(error=>{
            console.log(error);
        })
    })
  return (
    <table border={1}>
        <tr>
            <td>#</td>
            <td>Title</td>
            <td>body</td>
        </tr>
        {
        postdata.map((item)=>{
            return(
                <>
                <tr>
                    <td>{item.id}</td>    
                    <td>{item.title}</td>    
                    <td>{item.body}</td>    
                </tr>
                </>
            )
        })
    }
    </table>

  )
}

export default Jsonapi;
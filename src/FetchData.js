import React, { useEffect, useState } from 'react'

function FetchData() {

    const [user,setUser]= useState([])
    useEffect( ()=>{
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data =>setUser(data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        <ul>
           {user.map((user)=>(
                <li key={user}> {user.id} UserName: {user.login} 
              <br></br>
                
                </li>
           ))}
        </ul>
    </div>
  )
}

export default FetchData
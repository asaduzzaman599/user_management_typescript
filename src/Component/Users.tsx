import React, { FC, useEffect, useState } from 'react';
import { Props,  } from '../Model/Model';
import User from './User';

const Users = () => {
    const [users,setUsers]= useState<Props[]>([])
    const [team,setTeam]= useState<Props[]>([])
    const addUser = (user:Props):void =>{
        setTeam([...team,user])
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])


    return (
        <div>
            <h2>My Team</h2>
            <h3>Team Size: {team.length}</h3>
           {
            users.map(user=><User user={user} addUser={addUser}></User>)
           }
        </div>
    );
};

export default Users;
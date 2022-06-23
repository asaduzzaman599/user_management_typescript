import React, { FC } from 'react';
import { Props } from '../Model/Model';

interface UserModel{
    user:Props,
    addUser:(user:Props)=>void
}


const User:FC<UserModel> = ({user,addUser}) =>{
    return (
        <div>
            <h3>Hello from {user.name}</h3>
            <button onClick={()=>addUser(user)}>Add Team</button>
        </div>
    );
};

export default User;
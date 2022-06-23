import React, { useState } from 'react';
import { Props, User } from '../Model/Model';

const Counter = () => {
    const [count,setCount]= useState<number>(0)
    const [user,setUser]=useState<User|null>(null)
    const handleIncrease = ():void =>{
        setCount(count+1)
    }

    
    const handleForm = (e:HTMLFormElement):void =>{
        e.preventDefault()
        const userData = {
            name: "Adman",
            age:10,
            addUser:handleForm
        }
        setUser(userData)
    }
    return (
        <div>
            <h2>Counter</h2>
            <h3>{count}</h3>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = () => {
        if (email === "abc@gmail.com" && password === "12345") {
            // alert("login successfully");
            navigate('/home')
        }
        else {
            alert("login Failed");

        }
    }

    return (
        <>
            <div>
                <input type="email" placeholder='enter your email' onChange={(value) => setEmail(value.target.value)} />
                <input type="password" name="" id="" placeholder='password' onChange={(value) => setPassword(value.target.value)} />
                <button onClick={login}>login</button>
            </div>
        </>
    )
}

export default Login
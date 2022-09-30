import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = () => {
      const payload = {
        email,
        password,
        
      };
      fetch("https://evening-sierra-88015.herokuapp.com/user/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if(res.token){
                localStorage.setItem('psc_token',res.token);
            navigate('/notes');
            }
            
        })
        .catch((err) => console.log(err));
    };
  
    return (
      <div>
        <h1>Login</h1>
        <input
          type={"email"}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type={"text"}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
      
        <button onClick={handleSubmit}>Login</button>
      </div>
    );
}

export default Login
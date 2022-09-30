import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const navigate =useNavigate();
  const handleSubmit = () => {
    const payload = {
      email,
      password,
      age,
    };
    fetch("https://evening-sierra-88015.herokuapp.com/user/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => res ? navigate('/login'):"noteFound")
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Sign up</h1>
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
      <input
        type={"number"}
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Sign up</button>
    </div>
  );
};

export default Signup;

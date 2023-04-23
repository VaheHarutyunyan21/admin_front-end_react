import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(email,password);
    const respons=await fetch('http://localhost:5000/login',{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            email,
            password
            
        })
        
    })
    if (respons.status===403) {
        alert("Sxal Email kam Password")
    }
    const data = await respons.json()
    localStorage.setItem('token',data)
    console.log(respons);
    console.log(data);
    if (data !== null) {
        alert("201")
        navigate("/admin")
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}

export {Login};

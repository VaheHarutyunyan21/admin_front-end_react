import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Register() {
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
    const respons=await fetch('http://localhost:5000/register',{
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
        return alert("Sxal Email kam Password")

    }
    const data = await respons.json()
    localStorage.setItem('token',data)
    console.log(respons);
    console.log(data);
    if (data !== null) {
        alert("201")
        navigate("/login")
    }
  };
  return (
    <form onSubmit={handleSubmit}>
        <h2>Register</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

export {Register};
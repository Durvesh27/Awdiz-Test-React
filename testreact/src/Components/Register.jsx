import React from 'react'
import { useState } from 'react';
import './Form.css'
import { useNavigate } from 'react-router-dom';
const Register = () => {
const[userData,setUserData]=useState({name:"",email:"",password:""})
const router=useNavigate()
function handleChange(e){
setUserData({...userData,[e.target.name]:e.target.value})
}

function handleSubmit(e){
    e.preventDefault();
    if(userData.name && userData.email && userData.password){
    const array=JSON.parse(localStorage.getItem("Users")) || [];
    const data={name:userData.name,email:userData.email,password:userData.password,todo:[]}
    array.push(data)
    localStorage.setItem("Users",JSON.stringify(array))
    alert("Registered Successfully")
    router('/login')
    setUserData({name:"",email:"",password:""})
    }else{
        alert("Please fill all fields")
    }
}
  return (
    <div className='register'>
        <h2 style={{textAlign:"center"}}>Register</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder='Enter your Name' onChange={handleChange} value={userData.name} className='register-input'/><br/>
        <input type="email" name="email" placeholder='Enter your Email ID' onChange={handleChange} value={userData.email} className='register-input'/><br/>
        <input type="password" name="password" placeholder='Create new password' onChange={handleChange} value={userData.password} className='register-input'/><br/>
        <input type="submit" value="Register" className='form-btn'/>
      </form>
      <p>Already have an Account? <span style={{color:"blue"}} onClick={()=>router('/login')}>Login</span> </p>
    </div>
  )
}

export default Register

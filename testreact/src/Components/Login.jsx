import React, { useContext } from 'react'
import { useState } from 'react';
import './Form.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Context';

const Login = () => {
    const{login}=useContext(AuthContext)
    const[userData,setUserData]=useState({email:"",password:""})
    const router=useNavigate()
    function handleChange(e){
    setUserData({...userData,[e.target.name]:e.target.value})
    }
    
    function handleSubmit(e){
        e.preventDefault();
        if(userData.email && userData.password){
        const users=JSON.parse(localStorage.getItem("Users"))
        let flag=false;

        users.forEach((user)=>{
        if(user.email===userData.email && user.password===userData.password){
            flag=true;
            login(user)
        }
        })
        if(flag===false){
            alert("Register first")
        }else{
            
            alert("Logged in Successfully")
            setUserData({email:"",password:""})
        }
        }else{
            alert("Please fill all fields")
        }
    }

  return (
    <div className='register'>
        <h2 style={{textAlign:"center"}}>Login</h2>
      <form onSubmit={handleSubmit} >
        <input type="email" name="email" placeholder='Enter your Email ID' onChange={handleChange} value={userData.email} className='register-input'/><br/>
        <input type="password" name="password" placeholder='Enter new password' onChange={handleChange} value={userData.password} className='register-input'/><br/>
        <input type="submit" value="Login" className='form-btn'/>
      </form>
      <p>New User? <span style={{color:"blue"}} onClick={()=>router('/register')}>Register</span></p>
    </div>
  )
}

export default Login

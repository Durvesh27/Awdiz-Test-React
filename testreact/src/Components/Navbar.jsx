import React, { useState } from 'react'
import './Home.css'
import { useContext } from 'react'
import { AuthContext } from './Context'
import { useEffect } from 'react'
const Navbar = () => {
const[logged,setLogged]=useState(false)
const{state,login,logout}=useContext(AuthContext)
useEffect(()=>{
if(state?.user){
setLogged(true)
}else{
setLogged(false)
}
},[state])
  return (
    <div className='navbar'>
      <h2>TODO</h2>
      {
        logged && <h3>Add-Todo</h3>
      }   
      <h3>{state?.user?.name}</h3>   
    </div>
  )
}

export default Navbar

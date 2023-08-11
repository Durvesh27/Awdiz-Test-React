import React from 'react'
import { useState } from 'react'

const AddTodo = () => {
const[addTodo,setAddTodo]=useState({subname:"",desname:""})

function handleChange(e){
    setAddTodo({...addTodo,[e.target.name]:e.target.value})
}

function handleSubmit(e){
e.preventDefault()
let users=JSON.parse(localStorage.getItem("Users"))
let current=JSON.parse(localStorage.getItem("Current-User"))
addTodo.id=Math.floor(Math.random()*10)
if(addTodo.subname && addTodo.desname){
users.forEach((user)=>{
if(user.email===current.email){
    user.todo.push(addTodo)
    alert("Todo added")
}
})
localStorage.setItem("Users",JSON.stringify(users))
}else{
    alert("Please fill all fields")
}
}
  return (
    <div className='register'>
        <h2 style={{textAlign:"center"}}>Add Todo</h2>
        <form onSubmit={handleSubmit} >
        <input type="text" name="subname" placeholder='Enter Subject' onChange={handleChange} className='register-input'/><br/>
        <textarea type="text" name="desname" placeholder='Enter Description'  onChange={handleChange} className='text-area' /><br/>
        <input type="submit" value="Add Todo" className='form-btn'/>
      </form>
    </div>
  )
}

export default AddTodo

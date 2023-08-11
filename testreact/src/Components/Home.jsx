import React, { useEffect, useState } from 'react'
import './Home.css'
import { useContext } from 'react'
import { AuthContext } from './Context'

const Home = () => {
const{state}=useContext(AuthContext)
const [allTodos,setAllTodos]=useState()
const todos=[];

useEffect(()=>{
    let users=JSON.parse(localStorage.getItem("Users"))
    users.forEach((user)=>{
       user.todo.forEach((ele)=>{
            todos.push(ele)
        })
    })
    setAllTodos(todos)
    
},[state])

  return (
    <div className='todo-home'>
      {  console.log(allTodos,"all todos")}
        {
            allTodos?.map((item)=>(
      <div className="todo-item">
        <h3 className='todo-sub'>{item?.subname}</h3>
        <p className='todo-des'>{item?.desname}</p>
      </div>
                  ))
                }
    </div>
  )
}

export default Home

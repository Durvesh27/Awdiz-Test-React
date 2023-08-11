import { useEffect, useReducer } from "react";
import { createContext } from "react";

export const AuthContext=createContext()

const initialValue={user:null}

function reducer(state,action){
    switch(action.type){
        case 'login':
        return {user:action.payload}
        case 'logout':
        return {user:null}
        default:
        return state
    }
}

const AuthProvider=({children})=>{
const[state,dispatch]=useReducer(reducer,initialValue)

function login(activeUser){
localStorage.setItem("Current-User",JSON.stringify(activeUser))
dispatch({
    type:'login',
    payload:activeUser
})
}

function logout(){
localStorage.removeItem("Current-User")
dispatch({
type:"logout"
})
}

useEffect(()=>{
const logged=JSON.parse(localStorage.getItem("Current-User"))
if(logged){
    dispatch({
        type:"login",
        payload:logged
    })
}
},[])

return(
    <AuthContext.Provider value={{state,login,logout}}>
        {children}
    </AuthContext.Provider>
)
}
export default AuthProvider;
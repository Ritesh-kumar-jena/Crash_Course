import { useState } from 'react'

import './App.css'

function App() {
  const [todo,setTodo]=useState({email:"",password:""})
  const {email,password}=todo
  

  const handelchange=(e)=>{
     const {name,value}=e.target
     setTodo({...todo,[name]:value})
  }
  const handelclick=()=>{
  mail.style.display="block"
  pass.style.display="block"
  }
  
  return (
    <>
    <input onChange={handelchange} value={email} name='email' type="email" />
    <input onChange={handelchange}  value={password} name='password' type="password" />
    <button onClick={handelclick}>Submit Todo</button>
    
    <p id='mail' style={{display:"none"}}><b>{`Email:${email}`}</b></p>
    <p id='pass' style={{display:"none"}}><b>{`Email:${password}`}</b></p>
    </>
  )
}

export default App

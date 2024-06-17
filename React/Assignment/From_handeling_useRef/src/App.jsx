import { useEffect } from 'react'
import { useState,useRef } from 'react'


function App() {
  const [name, setName] = useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
 const nameRef=useRef(null)
 const passwordRef=useRef(null)
 const emailRef=useRef(null)
 const divRef=useRef(null)
useEffect(()=>{
nameRef.current.focus()
},[])
 const handelsubmit=(e)=>{
  e.preventDefault()
  
  if(name.length<8){
    alert("Name charecter must be gerter than 8")
  }
  else{
    divRef.current.style.display="block"
  }
 }
 const handelclick=(inputRef)=>{
   inputRef.current.focus()
 }

 const handelchange=()=>{
  setName(nameRef.current.value)
  setEmail(emailRef.current.value)
  setPassword(passwordRef.current.value)
 }
  return (
    <>
    <div style={{marginTop:"40px", marginLeft:"40%",padding:"20px"}}> 
    <form onSubmit={handelsubmit}>
       <input onChange={handelchange} name='name' onClick={()=>handelclick(nameRef)} ref={nameRef} type="text"  placeholder='Name'/>
       <br />
       <br />
       <input  onChange={handelchange} name='email' onClick={()=>handelclick(emailRef)} ref={emailRef} type="email" placeholder='Email'/>
       <br />
       <br />
       <input  onChange={handelchange} name='password' onClick={()=>handelclick(passwordRef)} ref={passwordRef} type="password" placeholder='password' />
       <br />
       <br />
       <input  type="submit" placeholder='Submit' />
       <br />
       <br />
       </form>
       <div ref={divRef} style={{textAlign:"center", display:"none"}}>
       <p>{`Name:- ${name}`}</p>
       <p>{`Email:- ${email}`} </p>
       <p> {`Password:- ${password}`}</p>
       </div>
       
       </div>
    </>
  )
}

export default App

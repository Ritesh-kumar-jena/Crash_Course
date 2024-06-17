import { useState,useEffect,useRef } from 'react'

function App() {
  const [text, setText] = useState("")
const inputRef=useRef(null)
const divRef=useRef(null)
useEffect(()=>{
inputRef.current.focus()
},[])
const handelchange=()=>{
  setText(inputRef.current.value)
}
const handelclick=()=>{
  divRef.current.style.backgroundColor="lightblue"
}
  return (
    <>
  <input style={{ marginTop:"40px",marginLeft:"40%"}} onChange={handelchange} ref={inputRef} type="text" />
  <p style={{ marginTop:"40px",marginLeft:"40%"}}>{`Text:- ${text}`}</p>
  <div ref={divRef} style={{height:"200px",width:"200px",backgroundColor:"lightgray", marginTop:"40px",marginLeft:"40%", textAlign:"center"}} onClick={handelclick}><b>click me to change color</b></div>
    </>
  )
}

export default App

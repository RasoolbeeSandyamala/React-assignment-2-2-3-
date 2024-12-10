import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    
    <textarea placeholder="Type something here..." rows={5} cols={30}
    onChange={(e)=>setCount(e.target.value.length)}></textarea>
      <h1 style={{color:"red"}}>{count}</h1>
    </>
  )
}
function Toggle(){
const [status, setStatus] = useState(true)
 return(
  <>
  {status ?<h1 style={{marginTop:80, color:'green'}}>Hello World</h1>:null}
  <button onClick={()=>setStatus(!status)} style={{color:'orangered',backgroundColor:'yellow',padding:15,fontSize:20}}>Show/Hide</button>
  </>
 )
}

export {App,Toggle}

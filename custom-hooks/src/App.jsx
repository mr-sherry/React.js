import { useEffect, useRef, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useLocalStorage from './Hooks/useLocalStorage'

function App() {
  const [vale,setVale]=useState("")
  let refe=useRef();
  const [name,setName]=useLocalStorage('name','guest');
 
  useEffect(()=>{
    setVale(name)
  },[])

  return (
    <>
    <input type="text"  ref={refe}/>
    <button onClick={()=>{
      let input=refe.current.value
      setVale(input)
      setName(input)
      refe.current.value=""
      }}>save</button>
    <InputBox value={vale} /> 
    </>
  )
}

export default App

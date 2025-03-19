import React from 'react'
import { useState } from 'react';


function Btn(props) {
  let body=document.querySelector("body")
  let rootDiv=document.getElementById("root")
  rootDiv.style.display="flex"
  rootDiv.style.justifyContent="center"
  rootDiv.style.alignItems="center"
  rootDiv.style.width="100%"
  rootDiv.style.flexWrap="wrap"

  let [color,setColor]=useState("black")

  body.style.backgroundColor=color

  return (
    <>
    <div id='container' style={{display:"flex",flexDirection:"row"}}>
    <button style={{backgroundColor:props.color}} onClick={()=>setColor(props.color)}>{props.color}</button>
    <button className='btn btn-success'>hello</button>
    </div>
    </>
  )
}

export default Btn;

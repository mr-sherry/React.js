import React, { useEffect, useState } from 'react'

function useLocalStorage(key,value) {
  
  let hello=()=>{
    let value1=localStorage.getItem(key);
    return value1 !== null ? value1:value;
  }
  const [name,setName]=useState(hello)

  useEffect(()=>{
    localStorage.setItem(key,name)
  },[key,name])


  return (
    [name,setName]
  )
}

export default useLocalStorage
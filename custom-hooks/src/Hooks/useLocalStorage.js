import React, { useEffect, useState } from 'react'

function useLocalStorage(key,value) {
  
  let hello=()=>{
    let value1=localStorage.getItem(key);
    console.log("saved name",value1);
    console.log("saved key",key);
    return value1 !== null ? value1:value;
  }
  const [item,setItem]=useState(hello)

  useEffect(()=>{
    localStorage.setItem(key,item)
  },[key,item])


  return (
    [item,setItem]
  )
}

export default useLocalStorage
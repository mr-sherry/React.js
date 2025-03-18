import { useState } from "react";

function Prac() {
    let [num,setNum]=useState(0)

    let numChange=(e)=>{
        setNum(e.target.value)
    }
    let multiplyNum=()=>{
        setNum(num*2)
    }

    return(
        <>
        <input value={num} onChange={numChange}/>
        <p>{num}</p>
        <button onClick={multiplyNum}> 
                2X
        </button>
        
        </>
    );
}
export default Prac;
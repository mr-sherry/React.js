import { useState } from "react";

function Boolean() {
    let [bool,setBool]=useState(true);
    

let clickFun=()=>{
        setBool(!bool);        
}


    return(
        <>
        <p>crruntly: {bool ? "ON" : "OFF"}</p>
        <button onClick={clickFun}>click</button>
        
        
        </>
    )
}
export default Boolean;
import { useState } from "react";

function TextChange() {
    let [text,setText]=useState("")
    let [words,setWords]=useState(0)
    let [letters,setLetters]=useState(0)
    
    let wordCount=(e)=>{
        setText(e.target.value)
        setWords(text.split(" ").length)
        setLetters(text.split("").length)
    }


    return(
        <>
        <textarea name="textarea" id="hello" onChange={wordCount}></textarea>
        <p>{text}</p>
        <p>words:{words} and Letters:{letters}</p>
        </>
    )
}
export default TextChange;
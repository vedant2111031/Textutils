import React, { useState } from 'react'

export default function TextForm(props) {
    const handleupclick = ()=>{
        let newtext= text.toUpperCase();
        settext(newtext);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handlecleartxt = ()=>{
        settext('');
        props.showAlert("Text cleared!", "success");
    }
    const handleloclick = ()=>{
        let newtext= text.toLowerCase();
        settext(newtext);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleonchange = (event)=>{
        console.log("on change");
        settext(event.target.value)
    }
    const handlecopy = ()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied!", "success");

    }
    const handelExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
        props.showAlert("Extra space removed", "success");
    }
    const [text,settext]=useState("Enter text here");
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert TO Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleloclick}>Convert TO Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handlecleartxt}>CLEAR TEXT</button>
            <button className="btn btn-primary mx-1" onClick={handlecopy}>COPY TEXT</button>
            <button className="btn btn-primary mx-1" onClick={handelExtraSpace}>REMOVE SPACE</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>"Your Text Summary</h1>
            <p>
              {text.split(" ").length} words and {text.length } characters
            </p>
            <p>{0.008* text.split(" ").length} minutes to read</p>
            <h2>
                Preview
            </h2>
            <p>
              {text.length>0?text:"ENTER SOMETHING TO PREVIEW"}
            </p>
        </div>
        </>
    )
}
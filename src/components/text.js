import React,{useState} from "react";


export default function TextForm(props){
    const [text,setText]=useState("enter text here")
    const updateValue=(e)=>{
        setText(e.target.value);
    }
    const toUpperCase=()=>{
        setText(text.toUpperCase());
    }
    const toLowerCase=()=>{
        setText(text.toLowerCase());
    }
    return(
        <div className="form-control border-0">
            <h1>{props.heading}</h1>
            <p>{text.split(" ").length} words and {text.length} Characters</p>
            <p>Read in {0.008 * text.split(" ").length} mins</p>
            <div className="mb-3">
                <textarea id="myBox" cols="20" rows="5" value={text } onChange={updateValue} className="form-control"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={toUpperCase} >convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={toLowerCase}>convert to LowerCase</button>
        </div>
    )
}

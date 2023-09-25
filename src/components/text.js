import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("enter text here");

  const updateValue = (e) => {
    setText(e.target.value);
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const clearText = () => {
    let text = document.getElementById("myBox");
    text.value = "";
  };

  return (
    <>
      <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.heading}</h1>
      <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
        {text.split(" ").length} words and {text.length} Characters
      </p>
      <p style={{ color: props.mode === "dark" ? "white" : "black" }}>Read in {0.008 * text.split(" ").length} mins</p>
      <div className="mb-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <textarea
          id="myBox"
          cols="20"
          rows="5"
          value={text}
          onChange={updateValue}
          className="form-control"
          style={{ color: props.mode === "dark" ? "white" : "black", backgroundColor:props.mode==="dark"?"black":"white"}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={toUpperCase}>
        convert to UpperCase
      </button>
      <button className="btn btn-primary mx-3" onClick={toLowerCase}>
        convert to LowerCase
      </button>
      <button className="btn btn-primary mx-3" onClick={clearText}>
        Clear Text
      </button>
    </>
  );
}

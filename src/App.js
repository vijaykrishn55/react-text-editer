import React, { useState } from "react";
import TextForm from './components/text';
import NavBar from './components/navbar';
import Alert from './components/Alert';

function App() {
const  [alert, setAlert]=useState(null)
const showAlert=(messege, type)=>{
  setAlert({
    msg:messege,
    type:type
  })
}
  const [mode , setMode]=useState("light");
  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    showAlert(`${newMode==='dark'?'Dark':'Light'} mode has been enable`,"success")
    // console.log(mode);
    // console.log(newMode);
    setMode(newMode);
    document.body.style.backgroundColor = mode === "dark" ? "white" : "black";
  };
  
  
  return (
    <>
      <NavBar title="Text Utile" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
        <div className="container my-3">
        <TextForm heading="Hello" mode={mode} />
        </div>
    </>
  );
}

export default App;

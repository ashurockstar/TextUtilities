import './App.css';
// import Friends from './Components/Friends/Friends';
// import Test from './Components/Test/Test';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState("light");

  const toggleDarkMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#02130b";
      document.body.style.color = "white";
    }
  }
  return (
    <>
      <Navbar 
        title="Text Utils"
        mode={mode}
        toggleDarkMode={toggleDarkMode} />
      {/* <Navbar /> */}
      <div className="container">
        <TextForm 
          mode={mode}
          heading="Enter Text To convert to needed Format"/>
      </div>
    </>
  );
}

export default App;

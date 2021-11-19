import './App.css';
// import Friends from './Components/Friends/Friends';
// import Test from './Components/Test/Test';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleDarkMode = (val) => {
    if (val.target.value === "red") {
      setMode("danger");
      document.body.style.backgroundColor = "#23040e";
      document.body.style.color = "white";
      showAlert("Dark Mode is enabled", "success");
    } else if (val.target.value === "blue") {
      setMode("primary");
      document.body.style.backgroundColor = "#031527";
      document.body.style.color = "white";
      showAlert("Dark Mode is enabled", "success");
    } else if (val.target.value === "green") {
      setMode("success");
      document.body.style.backgroundColor = "#02130b";
      document.body.style.color = "white";
      showAlert("Dark Mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode is enabled", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert( {
      message: message,
      type: type
    });
    setTimeout(setAlert, 1500, null);
  }
  return (
    <>
      <Router>
        <Navbar 
          title="Text Utils"
          mode={mode}
          toggleDarkMode={toggleDarkMode} />
        {/* <Navbar /> */}
        <Alert 
          alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/TextUtilities" element={
              <TextForm 
                mode={mode}
                heading="Enter Text To convert to needed Format"
                showAlert={showAlert}/>}
            />
            <Route path="/" element={
              <TextForm 
                mode={mode}
                heading="Enter Text To convert to needed Format"
                showAlert={showAlert}/>}
            />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;

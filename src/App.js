import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light")
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been Enabled", "success");
    } else {
      setMode("dark")
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been Enabled", "success");
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="Textodit" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        {/* <Routes>
          <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter text below to analyse" mode={mode} />} />
          <Route path='/about' element={<About mode={mode} />} />
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter text below to analyse" mode={mode} />
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;

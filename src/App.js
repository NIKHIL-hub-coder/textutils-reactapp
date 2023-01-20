import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   // Switch,
//   Route, 
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    },2000

    );
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "warning");
      document.title = "Textutils - Dark Mode";


      //frequent title change
      // setTimeout(() =>{
      //   document.title = "Textutils is amazing";
      // },2000);
      // setTimeout(() =>{
      //   document.title = "Install Textutils";
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  }


  return(
    <>
    {/* <Router> */}
      {/* <Navbar title="Textutils" aboutName = "about"/> */}
      {/* <Navbar title = "Textutils" mode={mode} toggleMode = {toggleMode}/>

      <Alert alert={alert}/>      
      <div className='container my3'>
      <Routes>
          <Route exact path="/about" element={<About />}/>

          <Route exact path="/" element = {<Textform showAlert = {showAlert} heading="Enter ur text" mode={mode}/>}/>
          

        </Routes>

      </div> */}
    {/* </Router> */}


    <Navbar title = "Textutils" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my3'>
      <Textform showAlert = {showAlert} heading="Enter ur text" mode={mode}/>
      </div>

    </>
  );
}

export default App;

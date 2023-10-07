import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type : type
     })
     setTimeout(() => {
      setAlert(null);
     }, 1000);
  }
  const toggleMode = ()=>{
      if (mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor ='grey';
        showAlert("Dark mode enable", "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor ='white';
        showAlert("Light mode enabled","success");
      }
  }
  return (
    <>
    
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
       <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/> 
      </div>
      
    </>
  );
}

export default App;

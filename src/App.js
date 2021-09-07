import React, {useState} from 'react';
import About from './Component/About';
import Alert from './Component/Alert';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';


function App() {
  const [mode, setMode] = useState('light')
  
  const toggleMode = () =>{
    if (mode === 'dark'){
      setMode('light');
      showAlert("Light mode enable", "success")
    }
    else{
      setMode('dark')
      showAlert("Dark mode enable", "success")
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 1800);
  }
  return (
    <div className="App">
      <Navbar logo="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <About />
      <TextForm heading="Convert To UpperCase" showAlert={showAlert} mode={mode} />

    </div>
  );
}

export default App;

import './App.css';
import { Navbar } from './components/navbar';
import { Sidebar } from './components/sidebar';
import { useState } from 'react';
import { VisionApp } from './types';


function App() {
  const [visionApp, setVisionApp] = useState<VisionApp>("face");

  const changeVisionApp = (app: VisionApp) => {
    setVisionApp(app)
  }


  return (
    <>
    <Navbar />
    <div className="app">
        <Sidebar visionApp={visionApp} setVisionApp={changeVisionApp} />
        <div className="content">
          <img src={`http://localhost:8000/${visionApp}`} height="90%"/>
        </div>
    </div>
    </>
    
  );
}

export default App;

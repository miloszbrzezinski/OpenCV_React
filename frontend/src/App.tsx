import './App.css';
import { Navbar } from './components/navbar';
import { Sidebar } from './components/sidebar';
import { useEffect, useState } from 'react';
import { VisionApp } from './types';


function App() {
  const [visionApp, setVisionApp] = useState<VisionApp>("face");
  const [imgSrc, setImgSrc] = useState<string>("");

  const changeVisionApp = (app: VisionApp) => {
    setVisionApp(app)
  }

  useEffect(() => {
    const src = `http://localhost:8000/${visionApp}`;
    setImgSrc(src);
  }, [visionApp]);


  return (
    <>
    <Navbar />
    <div className="app">
        <Sidebar visionApp={visionApp} setVisionApp={changeVisionApp} />
        <div className="content">
          <img src={imgSrc} alt={`Live feed showing ${visionApp} detection`} height="90%"/>
        </div>
    </div>
    </>
    
  );
}

export default App;

import './App.css';
import { Navbar } from './components/navbar';
import { Sidebar } from './components/sidebar';
import { useState } from 'react';
import { VisionApp, ImageType } from './types';


function App() {
  const [imageType, setImageType] = useState<ImageType>("grayscale");
  const [visionApp, setVisionApp] = useState<VisionApp>("face");

  const changeVisionApp = (app: VisionApp) => {
    setVisionApp(app)
  }

  const changeImageType = (image: ImageType) => {
    setImageType(image)
  }

  return (
    <>
    <Navbar />
    <div className="app">
        <Sidebar imageType={imageType} visionApp={visionApp} setVisionApp={changeVisionApp} setImageType={changeImageType}/>
        <div className="content">
          <img src={`http://localhost:8000/${imageType}`} height="90%"/>
        </div>
    </div>
    </>
    
  );
}

export default App;

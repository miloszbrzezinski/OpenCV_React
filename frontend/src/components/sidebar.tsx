import '../App.css';
import { VisionApp } from '../types';

interface SidebarProps {
    visionApp: VisionApp
    setVisionApp: (app: VisionApp) => void;
}

export const Sidebar = ({visionApp, setVisionApp}: SidebarProps) => {
    
    return ( 
        <div className="sidebar">
            <button onClick={() => {setVisionApp("raw")}} className={visionApp === "raw" ? "button-selected" : "button"}>Raw image</button>
            <button onClick={() => {setVisionApp("grayscale")}} className={visionApp === "grayscale" ? "button-selected" : "button"}>Black and white image</button>
            <div className='separator'/>
            <button onClick={() => {setVisionApp("face")}} className={visionApp === "face" ? "button-selected" : "button"}>Face detection</button>
            <button onClick={() => {setVisionApp("hands")}} className={visionApp === "hands" ? "button-selected" : "button"}>Hand detection</button>
            <div className='separator'/>
            <a href='https://github.com/miloszbrzezinski' target="_blank"
            rel="noopener noreferrer">GitHub</a>
        </div> 
    );
}
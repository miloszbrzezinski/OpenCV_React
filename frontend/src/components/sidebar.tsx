import '../App.css';
import { ImageType, VisionApp } from '../types';

interface SidebarProps {
    visionApp: VisionApp
    imageType: ImageType
    setVisionApp: (app: VisionApp) => void;
    setImageType: (image: ImageType) => void;
}

export const Sidebar = ({visionApp, imageType, setVisionApp, setImageType}: SidebarProps) => {
    
    return ( 
        <div className="sidebar">
            <button onClick={() => {setImageType("raw")}} className={imageType === "raw" ? "button-selected" : "button"}>Raw image</button>
            <button onClick={() => {setImageType("grayscale")}} className={imageType === "grayscale" ? "button-selected" : "button"}>Black and white image</button>
            <div className='separator'/>
            <button onClick={() => {setVisionApp("face")}} className={visionApp === "face" ? "button-selected" : "button"}>Face detection</button>
            <button onClick={() => {setVisionApp("hands")}} className={visionApp === "hands" ? "button-selected" : "button"}>Hand detection</button>
            <div className='separator'/>
            <a href='https://github.com/miloszbrzezinski' target="_blank"
            rel="noopener noreferrer">GitHub</a>
        </div> 
    );
}
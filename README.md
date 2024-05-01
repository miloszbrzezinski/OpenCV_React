# VisionApp - Live Video Processing

VisionApp is a web application that provides real-time video processing using OpenCV and MediaPipe for face and hand detection, along with grayscale and raw video feed options. The backend is powered by FastAPI, and the frontend utilizes React to offer a dynamic and responsive user interface.

## Features

- **Real-time Face Detection**: Detect and visualize face landmarks in real-time from your webcam feed.
- **Hand Detection**: Detect and outline hands using advanced computer vision techniques.
- **Grayscale Video Feed**: View a live grayscale version of your webcam feed.
- **Raw Video Feed**: Access a raw, unprocessed video stream from your webcam.

![alt text](https://raw.githubusercontent.com/miloszbrzezinski/OpenCV_React/main/frontend/public/screen.png)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python 3.8 or newer
- Node.js 14 or newer
- npm (typically comes with Node.js)

### Installing

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/visionapp.git
   cd visionapp

   
2. **Set up the backend**
   Navigate to the backend directory and install the required Python packages:
   
   ```bash
   cd backend
   pip install -r requirements.txt

  This will start the server on http://localhost:8000.

  
3. **Set up the frontend**
   Navigate to the frontend directory and install the necessary npm packages:

   ```bash
   cd ../frontend
   npm install
   
  This will serve the frontend on http://localhost:3000.


### Usage

Once both the backend and frontend are running, navigate to http://localhost:3000 in your browser. You will see the navbar and sidebar which allow you to select different video processing modes. The video feed will update based on your selection.


## Acknowledgments

- OpenCV and MediaPipe for the computer vision capabilities.
- FastAPI for the fast and efficient backend.
- React for the frontend.


  

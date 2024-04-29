from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import cv2 as cv


app = FastAPI()


def return_raw_image():
    """
        Function returning raw image from webcam
    """
    camera = cv.VideoCapture(0)
    while True:
        success, frame = camera.read()
        if success:
            ret, buffer = cv.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
        else:
            camera.release()


def return_grayscale_image():
    """
        Function returning image from webcam in grayscale
    """
    camera = cv.VideoCapture(0)
    while True:
        success, frame = camera.read()
        grayFrame = cv.cvtColor(frame, cv.COLOR_BGR2GRAY)
        if success:
            ret, buffer = cv.imencode('.jpg', grayFrame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
        else:
            camera.release()



@app.get("/raw")
def get_raw_image():
    return StreamingResponse(return_raw_image(), media_type="multipart/x-mixed-replace;boundary=frame")


@app.get("/grayscale")
def get_raw_image():
    return StreamingResponse(return_grayscale_image(), media_type="multipart/x-mixed-replace;boundary=frame")

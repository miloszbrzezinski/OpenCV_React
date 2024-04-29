from fastapi import FastAPI
from fastapi.responses import StreamingResponse

import cv2 as cv


app = FastAPI()


def get_raw_image():
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


@app.get("/raw")
def read_root():
    return StreamingResponse(get_raw_image(), media_type="multipart/x-mixed-replace;boundary=frame")
from fastapi import FastAPI
from pydantic import BaseModel
import qrcode
from io import BytesIO
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5500"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
) 
@app.get("/")
def main():
    return {
    "message": "QR Generator API is running"
}


class qrData(BaseModel):
    text: str
    size: int

@app.post("/generate")
def generate(data: qrData):
    qrsize=qrcode.QRCode(box_size=data.size)
    qrsize.add_data(data.text)
    qrsize.make()
    qrimg=qrsize.make_image()

    space = BytesIO()
    qrimg.save(space,format="png")
    space.seek(0)
    return StreamingResponse(space, media_type="image/png")

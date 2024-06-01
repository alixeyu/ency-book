from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware

from auth.endpoints import auth_router
from treasures.endpoints import treasure_router
from legends.endpoints import router as legends_router

app = FastAPI()
app.include_router(auth_router)
app.include_router(legends_router)
app.include_router(treasure_router)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home() -> Response:
    return {"data": "Hello, World"}

from fastapi import FastAPI, Response

from auth.endpoints import auth_router
from treasures.endpoints import treasure_router

app = FastAPI()
app.include_router(auth_router)
app.include_router(treasure_router)


@app.get("/")
def home() -> Response:
    return {"data": "Hello, World"}

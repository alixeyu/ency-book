from pydantic import BaseModel


class UserIn(BaseModel):
    username: str
    password: str


class UserOut(BaseModel):
    username: str


class UserInDB(BaseModel):
    username: str
    hashed_password: str

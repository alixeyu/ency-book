from fastapi import APIRouter, Response

from auth.models import UserIn, UserOut, UserInDB
from auth.utils import hash_password

auth_router = APIRouter(prefix="/auth")


@auth_router.post("/user", response_model=UserOut)
async def create_user(user_in: UserIn):
    created_user = UserInDB(
        **user_in.model_dump(),
        hashed_password=hash_password(password=user_in.password)
    )

    return created_user

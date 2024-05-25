from fastapi import APIRouter
from treasures.endpoints.magic_items import router as mi_router

__all__ = ["treasure_router"]

treasure_router = APIRouter(prefix="/treasures")
treasure_router.include_router(mi_router)

from fastapi import APIRouter, Depends, Response
from sqlalchemy.orm import Session

from db.database import SessionLocal
from treasures import cruds
from treasures.schemas.magic_items import MagicItemIn

router = APIRouter(prefix="/magic_items")


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@router.post("/", response_model=MagicItemIn)
def create_magic_item(magic_item: MagicItemIn, db: Session = Depends(get_db)):
    return cruds.create_magic_item(db=db, magic_item=magic_item)


@router.get("/", response_model=list[MagicItemIn])
def get_all_magic_items(db: Session = Depends(get_db)):
    return cruds.get_all_magic_items(db=db)

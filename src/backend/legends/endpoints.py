from fastapi import APIRouter, Depends, Response
from sqlalchemy.orm import Session

from db.database import SessionLocal
from legends import cruds
from legends.schemas import LegendIn

router = APIRouter(prefix="/legends")


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@router.post("/", response_model=LegendIn)
def create_legend(legend: LegendIn, db: Session = Depends(get_db)):
    return cruds.create_legend(db=db, legend=legend)


@router.get("/", response_model=list[LegendIn])
def get_all_legends(db: Session = Depends(get_db)):
    return cruds.get_legends(db=db)

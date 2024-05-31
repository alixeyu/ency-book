import uuid

from legends.models import Legend as LegendModel
from legends.schemas import LegendIn


def create_legend(db, legend: LegendIn):
    db_legend = LegendModel(**legend.model_dump())
    db.add(db_legend)
    db.commit()
    db.refresh(db_legend)
    return db_legend


def get_legend(db, legend_uid: uuid.UUID):
    return db.query(LegendModel).filter(uid=legend_uid).first()


def get_legends(db, skip: int = 0, limit: int = 100):
    return db.query(LegendModel).offset(skip).limit(limit).all()

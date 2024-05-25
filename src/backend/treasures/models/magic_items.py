from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Uuid

from db.database import Base


class MagicItem(Base):
    __tablename__ = "magic_items"

    id = Column(Integer, primary_key=True)
    uid = Column(Uuid)
    name = Column(String)
    description = Column(String)
    typ = Column(String)
    typ_details = Column(String, default="")
    rarity = Column(String)
    attunement = Column(Boolean, default=False)
    attunement_details = Column(String, default="")
    cursed = Column(Boolean, default=False)
    curse_description = Column(String, default="")
    value = Column(Integer, default=0)

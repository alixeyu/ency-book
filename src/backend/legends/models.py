from sqlalchemy import Integer, String, Column, Uuid, Text

from db.database import Base


class Legend(Base):
    __tablename__ = "legends"

    id = Column(Integer, primary_key=True)
    uid = Column(Uuid, unique=True)
    name = Column(String)
    period = Column(String)
    description = Column(String)
    full_story = Column(Text)

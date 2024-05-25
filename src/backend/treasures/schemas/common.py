import uuid

from pydantic import BaseModel, Field


class BaseTreasure(BaseModel):
    uid: uuid.UUID = Field(default_factory=uuid.uuid4)
    name: str
    description: str

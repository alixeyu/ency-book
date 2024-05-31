import uuid

from pydantic import BaseModel, Field


class LegendIn(BaseModel):
    uid: uuid.UUID = Field(default_factory=uuid.uuid4)
    name: str
    period: str
    description: str = Field(default="")
    full_story: str = Field(default="")

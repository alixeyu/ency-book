from pydantic import Field

from treasures.schemas.common import BaseTreasure
from treasures.schemas.types import MagicItemRarity, MagicItemType


class MagicItemIn(BaseTreasure):
    typ: MagicItemType = Field(default=MagicItemType.WONDOROUS)
    typ_details: str = Field(default="")
    rarity: MagicItemRarity = Field(default=MagicItemRarity.COMMON)
    attunement: bool = Field(default=False)
    attunement_details: str = Field(default="")
    cursed: bool = Field(default=False)
    curse_description: str = Field(default="")
    value: int = Field(default=0)

    class Config:
        use_enum_values = True


class MagicItemInDB(BaseTreasure):
    typ: MagicItemType = Field(default=MagicItemType.WONDOROUS)
    typ_details: str = Field(default="")
    rarity: MagicItemRarity = Field(default=MagicItemRarity.COMMON)
    attunement: bool = Field(default=False)
    attunement_details: str = Field(default="")
    cursed: bool = Field(default=False)
    curse_description: str = Field(default="")
    value: int = Field(default=0)

    class Config:
        use_enum_values = True

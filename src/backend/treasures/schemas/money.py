from pydantic import Field

from treasures.schemas.common import BaseTreasure
from treasures.schemas.types import CoinType


class BaseCoin(BaseTreasure):
    typ: CoinType = Field(default=CoinType.COPPER)


class CoinIn(BaseCoin):
    pass


class CoinOut(BaseCoin):
    pass


class CoinInDB(BaseCoin):
    pass

import enum


class CoinType(enum.Enum):
    COPPER = "copper piece"
    SILVER = "silver piece"
    ELECTRUM = "electrum piece"
    GOLD = "gold piece"
    PLATINUM = "platinum piece"


class MagicItemType(enum.Enum):
    ARMOR = "armor"
    POTION = "potion"
    SCROLL = "scroll"
    RING = "ring"
    ROD = "rod"
    STAFF = "staff"
    WAND = "wand"
    WEAPON = "weapon"
    WONDOROUS = "wondorous item"


class MagicItemRarity(enum.Enum):
    COMMON = "common"
    UNCOMMON = "uncommon"
    RARE = "rare"
    VERY_RARE = "very rare"
    LEGENDARY = "legendary"

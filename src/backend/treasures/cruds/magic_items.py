from treasures.models.magic_items import MagicItem
from treasures.schemas.magic_items import MagicItemIn


def create_magic_item(db, magic_item: MagicItemIn):
    db_magic_item = MagicItem(**magic_item.model_dump())
    db.add(db_magic_item)
    db.commit()
    db.refresh(db_magic_item)
    return db_magic_item


def get_all_magic_items(db, skip: int = 0, limit: int = 100):
    return db.query(MagicItem).offset(skip).limit(limit).all()

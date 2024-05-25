"""empty message

Revision ID: 9ae9bf1247f4
Revises:
Create Date: 2024-05-24 15:01:44.561888

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "9ae9bf1247f4"
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "magic_items",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("uid", sa.UUID),
        sa.Column("name", sa.String(length=20)),
        sa.Column("description", sa.Text),
        sa.Column("typ", sa.String(length=20)),
        sa.Column("typ_details", sa.String(length=20)),
        sa.Column("rarity", sa.String(length=10)),
        sa.Column("attunement", sa.Boolean, default=False),
        sa.Column("attunement_details", sa.String(length=50)),
        sa.Column("cursed", sa.Boolean, default=False),
        sa.Column("curse_description", sa.Text),
        sa.Column("value", sa.Integer, default=0)
    )


def downgrade() -> None:
    op.drop_table("magic_items")

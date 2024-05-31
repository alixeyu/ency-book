"""empty message

Revision ID: 1c6f8ecd277f
Revises: 9ae9bf1247f4
Create Date: 2024-05-30 23:06:45.035329

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '1c6f8ecd277f'
down_revision: Union[str, None] = '9ae9bf1247f4'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "legends",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("uid", sa.UUID),
        sa.Column("name", sa.String(length=100)),
        sa.Column("period", sa.String(length=20)),
        sa.Column("description", sa.Text),
        sa.Column("full_story", sa.Text),
    )


def downgrade() -> None:
    op.drop_table("legends")

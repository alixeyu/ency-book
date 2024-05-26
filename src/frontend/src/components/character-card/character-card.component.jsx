import React from "react";

const CharacterCard = ({ character }) => (
    <div className="card">
        <div className="card-name">{ character.name }</div>
        <div className="stat-info">
            <p className="alive-status">Desease</p>
        </div>
    </div>
);

export default CharacterCard;

import React from "react";

import "./character-icon.styles.scss";

const CharacterIcon = ({ name, imageURL }) => (
    <div className="character-icon">
        <div className="image-container">
            <img src={ imageURL } alt="character-image" />
        </div>
        <h2 className="character-name">{ name }</h2>
    </div>
);

export default CharacterIcon;

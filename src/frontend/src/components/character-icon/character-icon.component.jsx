import React from "react";

import "./character-icon.styles.scss";

const CharacterIcon = ({ name, imageURL }) => (
    <div className="character-icon">
        <div className="image-container">
            <img src={ imageURL } alt={ name + "-image" } />
        </div>
        <div className="character-info">
            <h2 className="character-name">{ name }</h2>
        </div>
    </div>
);

export default CharacterIcon;

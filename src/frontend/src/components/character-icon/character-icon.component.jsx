import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./character-icon.styles.scss";

const CharacterIcon = ({ uid, name, imageURL }) => {
    const navigate = useNavigate();

    return (
        <div className="character-icon" onClick={ () => navigate(`${uid}`) }>
            <div className="image-container">
                <img src={ imageURL } alt="character-image" />
            </div>
            <h2 className="character-name">{ name }</h2>
        </div>
    )
};

export default CharacterIcon;

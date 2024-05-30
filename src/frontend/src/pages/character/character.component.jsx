import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CharacterCard from "../../components/character-card/character-card.component";

import { selectCharacter } from "../../redux/characters/characters.selectors";

import "./character.styles.scss";


const CharacterPage = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const character = useSelector(selectCharacter(pathname.split("/")[2]));

    return (
        <div className="character-page">
            <div className="controls">
                <div>Arts</div>
                <div onClick={ () => navigate("/characters") }>Back</div>
            </div>
            <div className="content">
                <CharacterCard character={ character } />
            </div>
        </div>
    );
};

export default CharacterPage;

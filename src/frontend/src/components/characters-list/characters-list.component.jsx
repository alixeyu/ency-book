import React from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CharacterIcon from "../character-icon/character-icon.component";

import { selectCharactersList } from "../../redux/characters/characters.selectors";

import "./characters-list.styles.scss";


const CharactersList = ({ characters }) => (
    <div className="characters-list">
        {
            characters.map(({ charId, ...otherProps }) => (
                <CharacterIcon key={ charId } {...otherProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    characters: selectCharactersList
})

export default connect(mapStateToProps)(CharactersList);

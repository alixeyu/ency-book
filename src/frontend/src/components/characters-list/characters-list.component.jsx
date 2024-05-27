import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CharacterIcon from "../character-icon/character-icon.component";

import { selectCharactersList } from "../../redux/characters/characters.selectors";

import "./characters-list.styles.scss";


const CharactersList = ({ characters }) => (
    <div className="characters-list">
        {
            characters.map(({ id, ...otherProps }) => (
                <CharacterIcon key={ id } {...otherProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    characters: selectCharactersList
})

export default connect(mapStateToProps)(CharactersList);

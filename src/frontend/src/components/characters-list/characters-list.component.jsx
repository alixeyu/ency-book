import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { fetchCollectionStartAsync } from "../../redux/characters/characters.actions";

import CharacterIcon from "../character-icon/character-icon.component";

import { selectCharactersCollection, selectCharactersList } from "../../redux/characters/characters.selectors";

import "./characters-list.styles.scss";
import { createStructuredSelector } from "reselect";


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
    characters: selectCharactersList,
})

const mapDispatchToProps = dispatch => ({
    fetchCharacters: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);

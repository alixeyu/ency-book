import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { fetchCollectionStartAsync } from "../../redux/characters/characters.actions";

import CharacterIcon from "../character-icon/character-icon.component";

import { selectCharactersCollection } from "../../redux/characters/characters.selectors";

import "./characters-list.styles.scss";


const CharactersList = ({ fetchCharacters }) => {
    useEffect(() => {
        fetchCharacters(),
        [fetchCharacters]
    });

    const { characters } = useSelector(selectCharactersCollection());

    return (
        <div className="characters-list">
            {
                characters.map(({ charId, ...otherProps }) => (
                    <CharacterIcon key={ charId } {...otherProps} />
                ))
            }
        </div>
    );
};

const mapDispatchToProps = {
    fetchCharacters: fetchCollectionStartAsync
}

export default connect(null, mapDispatchToProps)(CharactersList);

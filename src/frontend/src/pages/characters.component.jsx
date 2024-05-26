import React from "react";

import Collection from "../components/collection/collection.component";

import "./characters.styles.scss";

const Characters = () => (
    <div className="characters-page">
        <div className="description-container">
            <p>Земли былых легенд - это множество историй, которые были рассказаны в разное время. Одни истории застали рассвет великих государств, в то время как другие повествуют о закате. За каждой историей стоят отважные герои, чьи подвиги запечатлены на долгие годы</p>
        </div>
        <div className="characters-container">
            <Collection />
        </div>
    </div>
);

export default Characters;

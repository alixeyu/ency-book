import React from "react";

import CharacterCard from "../character-card/character-card.component";

import "./legend-preview.styles.scss";

const LegendPreview = ({ title, timeline, description }) => (
    <div className="legend">
        <div className="title">
            <h2>{ title }</h2>
            <div className="line">
                <span className="timeline">{ timeline }</span>
            </div>
        </div>


        <div className="description">
            <p>{ description }</p>
        </div>
    </div>
);

export default LegendPreview;

import React from "react";

import "./dropdown.styles.scss";


const DropDown = ({ title }) => (
    <div className="dd-container">
        <div className="title">{ title }</div>
        <div className="characters-list">
            <div className="character-card">
                <div className="card-content">
                    <img src="/images/portrait-dragana.png" alt="" />
                </div>
                <div className="card-title">Драгана</div>
            </div>
            <div className="character-card">
                <div className="card-content">
                    <img src="/images/portrait-torstein.png" alt="" />
                </div>
                <div className="card-title">Торстейн</div>
            </div>
            <div className="character-card">
                <div className="card-content">
                    <img src="/images/portrait-wuk.png" alt="" />
                </div>
                <div className="card-title">Вук</div>
            </div>
            <div className="character-card">
                <div className="card-content">
                    <img src="/images/portrait-sahayan.png" alt="" />
                </div>
                <div className="card-title">Сахаян</div>
            </div>
            <div className="character-card">
                <div className="card-content">
                    <img src="/images/portrait-anagor.png" alt="" />
                </div>
                <div className="card-title">Анагор</div>
            </div>
            <div className="character-card">
            <div className="card-content">
                    <img src="/images/portrait-ku.png" alt="" />
                </div>
                <div className="card-title">Кю</div>
            </div>
        </div>
    </div>
);

export default DropDown;

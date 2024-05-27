import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";


const Header = () => (
    <div className="header">
        <div className="logo-container">
            <Link to="/">
                <Logo className="logo" />
            </Link>
        </div>
        <div className="options">
            <Link className="option" to="/characters">Персонажи</Link>
            <Link className="option" to="/bestiary">Бестиарий</Link>
            <Link className="option" to="/artifacts">Артефакты</Link>
            <Link className="option" to="/panteon">Пантеон</Link>
        </div>
    </div>
);

export default Header;

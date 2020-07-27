import React from "react";
import { NavLink } from "react-router-dom";

import HeaderStyles from "./HeaderStyles";

const Header = (props) => {
    return (
        <HeaderStyles>
            <h1>Conway's Game of Life</h1>
            <nav>
                <NavLink exact to="/">
                    Home
                </NavLink>
            </nav>
        </HeaderStyles>
    );
};

export default Header;

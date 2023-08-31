import React from "react";
import { Link } from "react-router-dom";

import { ThemeConsumer } from "../../data/context/ThemeContext";
import {
  FaMoon,
  FaSun
} from 'react-icons/fa';

function AppHeader() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <header>
            <div className="header__brand">
              <Link to="/">
                <h1>Puth's Diary</h1>
              </Link>
            </div>
            <div className="header__profile">
              <button onClick={() => toggleTheme()} className="btn btn__transparent">
                { theme == 'dark' ? <FaSun/> : <FaMoon/>}
              </button>
              <h3 className="header__username">Maputh</h3>
              <img
                className="header__image"
                src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                alt="User"
              />
            </div>
          </header>
        );
      }}
    </ThemeConsumer>
  );
}

export default AppHeader;

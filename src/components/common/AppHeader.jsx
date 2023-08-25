import React from "react";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <header>
      <div className="header__brand">
        <Link to="/">
          <h1>Puth's Diary</h1>
        </Link>
      </div>
      <div className="header__profile">
        <h3 className="header__username">Maputh</h3>
        <img
          className="header__image"
          src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
          alt="User"
        />
      </div>
    </header>
  );
}

export default AppHeader;

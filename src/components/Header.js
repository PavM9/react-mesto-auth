import React from "react";
import logo from '../images/mesto-logo.svg';
import { NavLink, useLocation } from "react-router-dom";

function Header({isLoggedIn, userEmail }) {
  const location = useLocation();
  const isLocationSignIn = location.pathname === '/sign-in';
  const isLocationMain = location.pathname === '/';
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Место Россия"
      />
      <nav className="header__nav-container">
        <p className="header__email">credo96@mail.ru{isLoggedIn ? userEmail : ""}</p>
        {!isLocationSignIn ?
          <NavLink className="header__link" to={"/sign-in"}>{isLoggedIn ? "Выйти" : "Войти"}</NavLink>
          :
          <NavLink className="header__link" to={"/sign-up"}>{!isLoggedIn ? "Регистрация" : ""}</NavLink>
        }
      </nav>
    </header>
  );
}

export default Header

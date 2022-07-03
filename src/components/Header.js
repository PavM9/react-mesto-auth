import React from "react";
import logo from '../images/mesto-logo.svg';
import { NavLink, useLocation } from "react-router-dom";

function Header({isLoggedIn, userEmail, onSignOut }) {
  const location = useLocation();
  const isLocationSignIn = location.pathname === '/sign-in';
  function handleSignOut() {
    onSignOut();
  }

  function handleSignIn() {

  }

  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Место Россия"
      />
      <nav className="header__nav-container">
        <p className="header__email">{isLoggedIn ? userEmail : ""}</p>
        {!isLocationSignIn ?
          <NavLink onClick={!isLoggedIn ? handleSignIn : handleSignOut} className="header__link" to={"/sign-in"}>
            {!isLoggedIn ? "Войти" : "Выйти"}
          </NavLink>
          :
          <NavLink className="header__link" to={"/sign-up"}>
            {!isLoggedIn ? "Регистрация" : ""}
          </NavLink>
        }
      </nav>
    </header>
  );
}

export default Header

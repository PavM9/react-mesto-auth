import React from "react";
import { Link, useLocation } from "react-router-dom";

function Authentication({ title, onSubmit, buttonSubmitText}) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const location = useLocation();
  const isLocationSignUp = location.pathname === "/sign-up";


  function handleEmailInput(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordInput(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(email, password);
  }

  return (
    <section className="auth">
      <h2 className="auth__title">{title}</h2>
      <form className="auth__form-container" onSubmit={handleSubmit}>
        <input
          className="auth__input"
          type="email"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={handleEmailInput}
          required
          formNoValidate
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Пароль"
          value={password}
          autoComplete="new-password"
          onChange={handlePasswordInput}
          required
          formNoValidate
        />
        <button
          className="auth__submit-button"
          type="submit">{buttonSubmitText}</button>
      </form>
      {isLocationSignUp && (
        <p className="auth__text">
          Уже зарегистрированы?&nbsp;
          <Link to="/sign-in" className="auth__link">Войти</Link>
        </p>
      )}
    </section>
  );
}

export default Authentication;

import React from "react";
import Authentication from "./Authentication";

function Login({ onLogin }) {


  return (
    <Authentication
      title="Вход"
      buttonSubmitText="Войти"
      // onSubmit={onLogin}
    />
  );
}

export default Login;

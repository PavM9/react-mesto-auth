import React from "react";
import Authentication from "./Authentication";

function Register({ onRegister }) {


  return (
    <Authentication
      title="Регистрация"
      buttonSubmitText="Зарегистрироваться"
      // onSubmit={onRegister}
    />
  );
}

export default Register;

import React, { useEffect } from "react";
import * as auth from "../utils/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InfoTooltip from "./InfoTooltip";

const Login = () => {
  const onLogin = (e) => {
    console.log("vas a  iniciar sesión");
  };

  return (
    <>
      <div className="login">
        <form action="" className="form form_begin" onSubmit={onLogin}>
          <fieldset className="form__fields form__fields_theme-dark form__set">
            <h2 className="form__heading form__heading_type-form-begin">
              Inicia sesión
            </h2>
            <div className="form__field form__field_theme-dark">
              <label className="form__label">
                <input
                  type="email"
                  className="form__input form__input_theme-dark"
                  placeholder="Correo electrónico"
                  name="email"
                  required
                  onChange={handleChange}
                />
              </label>
              <label className="form__label">
                <input
                  type="password"
                  className="form__input form__input_theme-dark"
                  placeholder="Contraseña"
                  name="password"
                  required
                  onChange={handleChange}
                />
              </label>
            </div>

            <button className="form__Button  form__Button_theme-dark form__submit pointer">
              Inicia sesión
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Login;

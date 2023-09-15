import React, {useState} from "react";
import * as auth from "../utils/auth";
import {Link, useNavigate} from "react-router-dom";
import InfoTooltip from "./InfoToolltip";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [infoToolOpen, setInfoToolOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [sloganOpen, setSloganOpen] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCloseInfoTool = () => {
    setInfoToolOpen(false);
    setError(false);
  };

  const onRegister = (e) => {
    e.preventDefault();
    const {password, email} = formData;
    auth.register(password, email).then((res) => {
      console.log(res);
      if (res.data) {
        navigate("/signin", {state: "success"});
        setFormData({email: "", password: ""});
      } else {
        setError(true);
      }
      setInfoToolOpen(true);
    });
  };
  return (
    <>
      <div className="register" onSubmit={onRegister}>
        <form action="" className="form ">
          <fieldset className="form__fields ">
            <h2 className="form__heading ">Sign Up</h2>
            <div className="form__field ">
              <label className="form__label">
                <input
                  type="email"
                  className="form__input "
                  placeholder="Correo electrónico"
                  required
                  name="email"
                  onChange={handleChange}
                />
              </label>
              <label className="form__label">
                <input
                  type="password"
                  className="form__input "
                  placeholder="Contraseña"
                  required
                  name="password"
                  onChange={handleChange}
                />
              </label>
            </div>

            <button
              className="form__button
             pointer"
            >
              Regístrate
            </button>
          </fieldset>
          <Link to="/signin" className="form__link">
            ¿Ya eres miembro? Inicia sesión aquí
          </Link>
        </form>
      </div>
      <InfoTooltip
        error={error}
        infoToolOpen={infoToolOpen}
        handleClose={handleCloseInfoTool}
      />
    </>
  );
};

export default Register;

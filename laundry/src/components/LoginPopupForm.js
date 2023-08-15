import React, {useEffect} from "react";
import * as auth from "../utils/auth";
import {Link, useLocation, useNavigate} from "react-router-dom";
import PopupWithForm from "./PopupWithForm";

export default function LoginPopupForm({
  email,
  password,
  handleLogin,
  onClose,
}) {
  const [formData, setFormData] = React.useState({});
  const [infoToolOpen, setInfoToolOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onLogin = (e) => {
    // const {email, password} = formData;
    console.log(formData);
    e.preventDefault();
    auth
      .authorize(password, email)
      .then((data) => {
        console.log(data);
        /*if (data.token) {
          setFormData({email: "", password: ""});
          navigate("/");
          handleLogin();
        }*/
      })
      .catch((err) => {
        setInfoToolOpen(true);
        setError(true);
        console.log(err);
      });
  };

  return (
    <>
      <img
        alt="holi"
        style={{height: "100px"}}
        src="https://unsplash.com/es/fotos/ZCHj_2lJP00"
      ></img>
      <PopupWithForm
        title="Inicia Sesión"
        action="Inicia Sesión"
        onClose={onClose}
        onSubmit={onLogin}
        inputs={[
          {
            type: "email",
            placeholder: "Correo electrónico",
            name: "email",
            id: "email",
            minLength: "2",
            maxLength: "30",
            onChange: handleChange,
            value: email,
          },
          {
            type: "password",
            placeholder: "Contraseña",
            name: "password",
            id: "password",
            onChange: handleChange,
            value: password,
          },
        ]}
      />
    </>
  );
}

import React, {useEffect} from "react";
import * as auth from "../utils/auth";
import {Link, useLocation, useNavigate} from "react-router-dom";
import PopupWithForm from "./PopupWithForm";

export default function LoginPopupForm({
  email,
  password,
  handleLogin,
  currentUser,
  onClose,
}) {
  const [formData, setFormData] = React.useState({});
  const [infoToolOpen, setInfoToolOpen] = React.useState(false);
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onLogin = (e) => {
    const {email, password} = formData;

    e.preventDefault();
    auth
      .authorize({email, password})
      .then((data) => {
        if (data.token) {
          navigate("/");
          handleLogin();

          setFormData({email: "", password: ""});
          onClose();
        }
      })
      .catch((err) => {
        setInfoToolOpen(true);
        setError(true);
        console.log(err);
      });
  };

  return (
    <>
      <PopupWithForm
        currentUser={currentUser}
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

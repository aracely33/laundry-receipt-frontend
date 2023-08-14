import React, {useState} from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {
  const {email, password} = props;
  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlaceSubmit({email, password});
    props.setEmail("");
    props.setPassword("");
  }
  return (
    <>
      <img alt="holi" src="https://unsplash.com/es/fotos/ZCHj_2lJP00"></img>
      <PopupWithForm
        title="Inicia Sesión"
        action="Inicia Sesión"
        onClose={props.onClose}
        onSubmit={handleSubmit}
        inputs={[
          {
            type: "email",
            placeholder: "Correo electrónico",
            name: "email",
            id: "form__input form__input_theme-dark",
            minLength: "2",
            maxLength: "30",
            onChange: props.onEmailChange,
            value: email,
          },
          {
            type: "password",
            placeholder: "Contraseña",
            name: "newPlace",
            id: "form__input form__input_theme-dark",
            onChange: props.onPasswordChange,
            value: password,
          },
        ]}
      />
    </>
  );
}

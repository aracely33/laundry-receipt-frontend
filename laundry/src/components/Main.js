import React from "react";
import {Link} from "react-router-dom";
function Main(props) {
  function handleClickUserAvatar(avatar) {
    props.onAvatarClick(avatar.target);
  }

  return (
    <>
      <div className="main">
        <h1 className="main__title">Inicia sesión</h1>

        <div className="main__staff">
          {props.staff.map((person) => {
            return (
              <div key={person.id} className="item">
                <figure className="item__figure">
                  <button
                    className="item__button"
                    onClick={handleClickUserAvatar}
                  >
                    <img
                      className="item__image item__image_staff "
                      src={person.avatar}
                      alt={person.first_name}
                    />
                  </button>
                </figure>
                <span className="item__name">{person.first_name}</span>
              </div>
            );
          })}
        </div>
        <p>Aun no te has registrado ? registrate</p>
      </div>
    </>
  );
}

export default Main;

/*  <Link to="/" className="Link">
            ¿Aún no eres miembro? Regístrate aquí
          </Link>*/

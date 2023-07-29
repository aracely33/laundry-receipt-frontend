import React from "react";
import mainRequestImage from "../images/new-order.svg";
import { staff } from "./staff";
function Main(props) {
  function handleClickUserAvatar(avatar) {
    props.onAvatarClick(avatar.target);
  }

  return (
    <>
      <div className="main">
        <h1 className="main__title">Inicia sesión</h1>
        <div className="main__request">
          {staff.map((person) => (
            <div key={person.id} className="item">
              <figure className="item__figure">
                <button
                  className="item__button"
                  onClick={handleClickUserAvatar}
                >
                  <img
                    className="item__image item__image_staff "
                    src={person.avatar}
                    alt={person.name}
                  />
                </button>
              </figure>
              <span className="item__name">{person.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;

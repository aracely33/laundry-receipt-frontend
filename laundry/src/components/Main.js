import React from "react";
import {Link, useMatch} from "react-router-dom";
function Main(props) {
  function handleClickUserAvatar(e) {
    const userId = parseInt(e.target.id);
    const person = props.staff.find((person) => person.id === userId);
    props.onAvatarClick(person);
  }

  return (
    <>
      <div className="main">
        <h1 className="main__title">Inicia sesión</h1>
        <div className="main__staff">
          {props.staff.map((person) => {
            return (
              <div key={person.id} className="item ">
                <figure className="item__figure">
                  <button
                    className="item__button"
                    onClick={handleClickUserAvatar}
                  >
                    <img
                      className="item__image item__image_staff "
                      src={person.avatar}
                      alt={person.first_name}
                      id={person.id}
                    />
                  </button>
                </figure>
                <span className="item__name">{person.first_name}</span>
              </div>
            );
          })}
        </div>
        {useMatch("/signin") && (
          <Link to="/signup" className="form__link">
            Didn't register yet? Join us!
          </Link>
        )}
      </div>
    </>
  );
}

export default Main;

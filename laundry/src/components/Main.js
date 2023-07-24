import React from "react";
import mainRequestImage from "../images/new-order.svg";

function Main(props) {
  return (
    <>
      <div className="main">
        <div className="main__request">
          <h1 className="main__title">¿Nuevo pedido?</h1>
          <button className="main__button" onClick={props.onNewOrderClick}>
            Registrar nuevo pedido
          </button>
        </div>

        <img src={mainRequestImage} className="main__image" />
      </div>
    </>
  );
}

export default Main;

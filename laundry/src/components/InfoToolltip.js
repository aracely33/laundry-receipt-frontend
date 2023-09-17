import React from "react";
import aprove from "../images/Ok-pana.svg";
import denied from "../images/Something-wrong.svg";
import Popup from "./Popup";

const InfoTooltip = ({error, infoToolOpen, handleClose}) => {
  return (
    <>
      <Popup isOpen={infoToolOpen} onClose={() => handleClose()}>
        <div className="popup__container popup__conatiner_function-infoToolTip">
          <button
            className="close-button pointer"
            type="button"
            onClick={handleClose}
          />
          {error ? (
            <>
              <img
                src={denied}
                alt="Icono de rechazo"
                className="popup__image popup__image_type-infoTooltip"
              />

              <h2 className="popup__message">
                Something went wrong.Try it again!
              </h2>
            </>
          ) : (
            <>
              <img
                src={aprove}
                alt="Icono de aprobación"
                className="popup__image popup__image_type-infoTooltip"
              />
              <h2 className="popup__message">¡Correcto! Ya estás registrado</h2>
            </>
          )}
        </div>
      </Popup>
    </>
  );
};

export default InfoTooltip;

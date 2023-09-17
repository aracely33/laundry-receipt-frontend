/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useEffect} from "react";

function Popup(props) {
  const popupRef = useRef(null);

  const handlePopupClickOutside = (e) => {
    if (popupRef.current && e.target.contains(popupRef.current)) {
      props.onClose();
    }
  };

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Escape" && props.isOpen) {
      props.onClose();
    }
  };

  useEffect(() => {
    if (props.isOpen) {
      document.addEventListener("mousedown", handlePopupClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("mousedown", handlePopupClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handlePopupClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [props.isOpen]);

  return (
    <>
      <div
        ref={popupRef}
        className={`popup ${props.isOpen ? " popup_opened" : ""}`}
      >
        {props.children}
      </div>
    </>
  );
}

export default Popup;

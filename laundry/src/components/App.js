import React, { useState } from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import { UserContext } from "../contexts/UserContexts";
import Popup from "./Popup";
import NewOrderPopup from "./NewOrderPopup";
import ProductList from "./ProductList";
import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  function handleNewOrderClick() {
    console.log("vamos a hacer una nueva orden");
    //setNewOrderPopupOpen(true);
  }

  function handleObtainAvatar(avatar) {
    console.log(avatar);
  }
  return (
    <>
      <UserContext.Provider value={currentUser}>
        <Main
          onAvatarClick={handleObtainAvatar}
          onNewOrderClick={handleNewOrderClick}
        />
        <Header
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
        <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
      </UserContext.Provider>
    </>
  );
}

/*const [isNewOrderPopupOpen, setNewOrderPopupOpen] = React.useState(false);
  const [newPlaceLink, setNewPlaceLink] = React.useState("");
  const [newPlaceTitle, setNewPlaceTitle] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");



  //Abrir y cerar popups
  function handleNewOrderClick() {
    setNewOrderPopupOpen(true);
  }

  function closeAllPopups() {
    setNewOrderPopupOpen(false);
  }

  //OnChange
  function handleNewPlaceLinkChange(e) {
    setNewPlaceLink(e.target.value);
  }

  function handleNewPlaceTitleChange(e) {
    setNewPlaceTitle(e.target.value);
  }

  //agregar una bueva factura
  function handleAddPlaceSubmit({ newPlaceTitle, newPlaceLink, currentDate }) {
    console.log("info para mandar a la api");
    console.log(newPlaceTitle, newPlaceLink, currentDate);
    /* 
   { newPlaceTitle: title, newPlaceLink: link }
   api.handleAddCard({ title, link }, token).then((newCard) => {
      setCards([...cards, newCard.data]);
    });
    closeAllPopups();
  }*/

/* <Main onNewOrderClick={handleNewOrderClick} />
    <Footer></Footer>
      <Popup isOpen={isNewOrderPopupOpen}>
        <NewOrderPopup
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
          onNewPlaceTitleChange={handleNewPlaceTitleChange}
          onNewPlaceLinkChange={handleNewPlaceLinkChange}
          newPlaceLink={newPlaceLink}
          newPlaceTitle={newPlaceTitle}
          setNewPlaceLink={setNewPlaceLink}
          setNewPlaceTitle={setNewPlaceTitle}
          name={userName}
          about={userDescription}
        ></NewOrderPopup>
      </Popup>
*/
export default App;

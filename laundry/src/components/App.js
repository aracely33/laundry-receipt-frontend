import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../utils/api";
import Main from "./Main";
import Header from "./Header";
import LoginPopupForm from "./LoginPopupForm";

import Footer from "./Footer";
import {UserContext} from "../contexts/UserContexts";
import Popup from "./Popup";
import NewOrderPopup from "./LoginPopupForm";
import ProductList from "./ProductList";
import ProtectedRoute from "./ProtectedRoute";
import {BrowserRouter} from "react-router-dom";
import {data} from "./data";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [users, setUsers] = React.useState([]);

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [token, setToken] = React.useState("");
  const [isLoginPopupOpen, setisLoginPopupOpen] = React.useState(true);

  function handleObtainAvatar(avatar) {
    console.log(avatar);
  }

  React.useEffect(() => {
    api.getUsers().then((data) => {
      setUsers(data.data);
    });
  }, []); // Ejecuta cuando 'users' cambia

  return (
    <>
      <UserContext.Provider value={currentUser}>
        <Header
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
        <Main staff={users} onAvatarClick={handleObtainAvatar} />;
        <Footer></Footer>
      </UserContext.Provider>
      <Popup isOpen={isLoginPopupOpen}>
        <LoginPopupForm />
      </Popup>
    </>
  );
}

/*
        <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />


const [isNewOrderPopupOpen, setNewOrderPopupOpen] = React.useState(false);
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

import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../utils/api";
import Main from "./Main";
import Header from "./Header";
import * as auth from "../utils/auth";
import ProtectedRoute from "./ProtectedRoute";
import LoginPopupForm from "./LoginPopupForm";

import Footer from "./Footer";
import {UserContext} from "../contexts/UserContexts";
import Popup from "./Popup";
import ProductList from "./ProductList";
import {Route, Routes} from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [users, setUsers] = React.useState([]);

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");
  const [isLoginPopupOpen, setisLoginPopupOpen] = React.useState(false);

  const navigate = useNavigate();
  React.useEffect(() => {
    const handleTokenCheck = () => {
      if (localStorage.getItem("jwt")) {
        const jwt = localStorage.getItem("jwt");
        setToken(jwt);
        console.log(jwt);
        /*auth
          .checkToken(jwt)
          .then((res) => {
            if (res.data) {
              setEmail(res.data.email);
              setLoggedIn(true);
              navigate("/");
            }
          })
          .catch((err) => {
            console.log(err);
          });*/
      }
    };
    handleTokenCheck();
  }, [loggedIn, navigate]);
  function handleObtainAvatar(avatar) {
    console.log(avatar);
    setisLoginPopupOpen(true);
  }

  function closeAllPopups() {
    setisLoginPopupOpen(false);
  }

  React.useEffect(() => {
    api.getUsers().then((data) => {
      setUsers(data.data);
    });
  }, []); // Ejecuta cuando 'users' cambia

  //Para la lógica de login
  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setEmail("");
    setLoggedIn(false);
  };

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
          handleSignOut={handleSignOut}
          email={email} //aquí más adelante será el user
        />
        <Routes>
          <Route
            path="/"
            exact
            element={<ProtectedRoute loggedIn={loggedIn} />}
          >
            <Route
              path="/"
              element={
                <ProductList email={email} password={password}></ProductList>
              }
            />
          </Route>
          <Route
            exact
            path="/signin"
            element={<Main staff={users} onAvatarClick={handleObtainAvatar} />}
          />
        </Routes>
        <Footer></Footer>
      </UserContext.Provider>
      <Popup isOpen={isLoginPopupOpen}>
        <LoginPopupForm onClose={closeAllPopups} />
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

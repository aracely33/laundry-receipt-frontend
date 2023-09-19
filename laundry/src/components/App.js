import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../utils/api";
import Main from "./Main";
import Header from "./Header";
import * as auth from "../utils/auth";
import ProtectedRoute from "./ProtectedRoute";
import LoginPopupForm from "./LoginPopupForm";
import Register from "./Register";
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
        auth
          .checkToken(jwt)
          .then((res) => {
            if (res.data) {
              setEmail(res.data.email);
              setCurrentUser(res.data);
              setLoggedIn(true);
              navigate("/");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    handleTokenCheck();
  }, [loggedIn, navigate]);
  function handleObtainAvatar(avatar) {
    setCurrentUser(avatar);
    setisLoginPopupOpen(true);
  }

  function closeAllPopups() {
    setEmail("");
    setisLoginPopupOpen(false);
  }

  React.useEffect(() => {
    api.getUsers().then((data) => {
      setUsers(data.data);
    });
  }, []);

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
          // email={email} //aquí más adelante será el user
        ></Header>
        <Routes>
          <Route
            path="/"
            exact
            element={<ProtectedRoute loggedIn={loggedIn} />}
          >
            <Route
              path="/"
              element={
                <ProductList
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  total={total}
                  setTotal={setTotal}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                  email={email}
                  password={password}
                ></ProductList>
              }
            />
          </Route>
          <Route
            exact
            path="/signin"
            element={<Main staff={users} onAvatarClick={handleObtainAvatar} />}
          />
          <Route exact path="/signup" element={<Register />} />
        </Routes>
        <Footer></Footer>
        <Popup isOpen={isLoginPopupOpen} onClose={() => closeAllPopups()}>
          <LoginPopupForm
            handleLogin={handleLogin}
            currentUser={currentUser}
            onClose={closeAllPopups}
          />
        </Popup>
      </UserContext.Provider>
    </>
  );
}

export default App;

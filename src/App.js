import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PageNoFound from "./components/404/PageNotFound";
import Checkout from "./components/basket/checkout/Checkout";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import { useStateValue } from "./components/stateProvider";
import { auth, onAuthStateChanged } from "./firebase";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        // User logged in
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // User is signed out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNoFound />} />
      </Routes>
    </>
  );
}

export default App;

import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PageNoFound from "./components/404/PageNotFound";
import Checkout from "./components/basket/checkout/Checkout";
import Payment from "./components/basket/subtotal/payment/Payment";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import { useStateValue } from "./components/stateProvider";
import { auth, onAuthStateChanged } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/orders/Orders";

const promise = loadStripe(
  "pk_test_51LWwGYDo0BFy2Fyv6Rfu2nmKsZofiiNQkDFz5kqVCfHUG1km9JHzvmnwfDmTqF5zCxD9zUKguE693y6p09hywDgi00As1qcPIW"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
        <Route
          path="orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
        <Route
          path="payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
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

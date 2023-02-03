import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Payment/Payment";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Order/Orders";

const promise = loadStripe(
  "pk_test_51MSLJnLVu0QffixopawRrFDhPG16T6Lgba7adzKWAeUMz7CW6JBQlWdFTUB7xBzzKTO6il5Q07cCR4lhQyNTXpOp00Z8mlHHqd"
);

function App() {
  // listener
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    // will only runs once when the app component loads...
    // as soon as we attach this listener - like observer listener
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>", authUser);
      if (authUser) {
        // the user just logged in/ the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          {/* {Header} */}
          <Header />
          {/* {Home} */}
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route exact path="/Checkout">
          <Header />
          <Checkout />
        </Route>
      </div>
    </Router>
  );
}

export default App;

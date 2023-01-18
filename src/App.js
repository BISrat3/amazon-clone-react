import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  "pk_test_51MRgNYEFQAbHNks3JfnGDgx69wMEftX3E0JtiARaVaqcn24fqNs7oenXvRxHtiV8uajVjR2oBn5QMgIjAAzybE7J00BGpfKEfu")

function App() {
  
  // listener 
  const [{user}, dispatch] = useStateValue();
	useEffect(() => {
    // will only runs once when the app component loads...
		auth.onAuthStateChanged((authUser) => {
      console.log('The User is >>', authUser)
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
        <Route exact path="/login">
            <Login />
        </Route>
        <Route exact path="/">
          {/* {Header} */}
          <Header />
          {/* {Home} */}
          <Home/> 
        </Route  >
        <Route path='/orders'>
          <Orders/>
        </Route>
        <Route path='/payment'>
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route exact path="/Checkout">
          {/* <Header/> */}
          <Header />
          <Checkout/>
        </Route>
      </div>
    </Router>
  );
}

export default App;

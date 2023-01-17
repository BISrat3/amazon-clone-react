import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase'

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
        </Route >
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

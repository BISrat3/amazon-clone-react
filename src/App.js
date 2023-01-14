import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';

function App() {
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

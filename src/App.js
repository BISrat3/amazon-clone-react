import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
        <Route exact path="/">
          {/* {Header} */}
          {/* {Home} */}
          <Home/> 
        </Route >
        <Route exact path="/Checkout">
          {/* <Header/> */}
          <Checkout/>
        </Route>
      </div>
    </Router>
  );
}

export default App;

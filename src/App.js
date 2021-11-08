import Home from './components/Home/home';
import './App.css'
import Destination from './components/Destination/destination';
import Technology from './components/technology/technology';
import Crew from './components/crew/crew';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';

function App() {
  
  return (
    <Router basename="/Space-Tourism">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/destination">
            <Destination/>
          </Route>
          <Route path="/crew">
            <Crew/>
          </Route>
          <Route path="/technology">
            <Technology/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './pages/Register';
import Laisee from './pages/Laisee';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Register/>
          </Route>
          <Route exact path ="/laisee">
            <Laisee/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

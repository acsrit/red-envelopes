import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './pages/Register';
import Laisee from './pages/Laisee';
import Prize from './pages/Prize';
import { ParticipantContext } from './ParticipantContext';

function App() {
  const [participant, setParticipant] = useState(null)

  return (
    <div className="App">
        <Router>
          <Switch>
            <ParticipantContext.Provider value={{participant, setParticipant}}>
              <Route exact path="/red-envelopes" component={Register}></Route>
              <Route exact path ="/laisee" component={Laisee}></Route>
              <Route exact path ="/prize" component={Prize}></Route>
            </ParticipantContext.Provider>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

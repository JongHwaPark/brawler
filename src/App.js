import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './components/home';

function App() {
  return (
      <Router>
          <Header />
          <Switch>
              <Route expect path="/" component={Home}/>
              <Route path="/Sign In" component={Home}/>
              <Route path="/Sign Up" component={Home}/>
          </Switch>
      </Router>
  );
}

export default App;

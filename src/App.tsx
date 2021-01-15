import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/organisms/header';
import { Home } from './components/pages/home';
import StatusProvider from './context/statusProvider.component';

const  App : React.FC = () => {
  return (
      <StatusProvider>
          <Router>
              <Header />
              <Switch>
                  <Route expect path="/" component={Home}/>
                  <Route path="/Sign In" component={Home}/>
                  <Route path="/Sign Up" component={Home}/>
              </Switch>
          </Router>
      </StatusProvider>
  );
};

export default App;

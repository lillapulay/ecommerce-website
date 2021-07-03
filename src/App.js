import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import HomeLayout from './layouts/HomeLayout';

// Pages
import Home from './pages/Home'
import Registration from './pages/Registration'

import './default.scss';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' render={() => (
            <HomeLayout>
              <Home />
            </HomeLayout>
          )} />
          <Route path='/registration' render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )} />
        </Switch>
    </div>
  );
}

export default App;

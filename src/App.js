import './App.scss';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Newform from './components/Newform';
import Faculties from './components/Faculties';
import Faculty from './components/Faculty';


function App() {
  return (
    <BrowserRouter>
      <div>
      <Navbar />
      <Switch>
        <Route exact path = "/"  component = { Faculties } />
        <Route exact path = "/faculty/:id" component = {Faculty} />
        <Route exact path = "/newForm/:id?" component = {Newform} />
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;

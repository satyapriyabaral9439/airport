import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layouts/Navbar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Route path='/signIn' component={SignIn}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
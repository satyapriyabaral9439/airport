import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import AirportReport from './components/airport/AirportReport';
import Navbar from './components/layouts/Navbar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Route path='/signIn' component={SignIn}></Route>
          <Route path='/report' component={AirportReport}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
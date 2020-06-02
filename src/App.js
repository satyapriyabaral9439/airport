import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import LandingPage from './components/layouts/LandingPage';
import Dashboard from './components/dashboard/Dashboard';
import CreateTransaction from './components/airport/CreateTransaction';
import Header from './components/auth/Header';
import history from "./components/history";
import AirportReport from './components/airport/AirportReport';
import PrivateRoute from "./components/layouts/PrivateRoute";
import { doLogin, doLogout } from "./store/actions/auth";

class App extends React.Component {

  doLoginUser = (userName) => {
    this.props.doLogin(userName);
  }
  doLogoutUser = () => {
    this.props.doLogout();
  }
  render() {
    const { auth } = this.props;
    return (
      <Router history={history}>
        <Header doLogin = {this.doLoginUser} doLogout={this.doLogoutUser} auth={auth} />
        <Switch>
          <Route exact path="/" component={LandingPage} auth={auth}/>
          <PrivateRoute path="/dashboard" component={Dashboard} auth={auth}/>
          <PrivateRoute path="/report" component={AirportReport} auth={auth} />
          <PrivateRoute path="/transaction" component={CreateTransaction} auth={auth} />
          <Route component={() => <div>No such page!</div>} />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
      doLogin: (userName) => dispatch(doLogin(userName)),
      doLogout: () => dispatch(doLogout())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
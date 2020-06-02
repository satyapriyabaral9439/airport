import React from "react";
import SignedInLinks from '../layouts/SignedInLinks'

class Header extends React.Component {
  state = {
    username: "",
    password:""
  };

  handleChange = e => this.setState({ username: e.target.value });

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }
  fakeLogin = e => {
    const { username } = this.state;
    e.preventDefault();
    if (!username) {
      return alert("Provide a username.");
    }
    this.props.doLogin(username);
    this.setState({ username: "" });
    
  };

  fakeLogout = () => this.props.doLogout();

  render() {
    const { auth } = this.props;
    if (auth.isLoggedIn) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand"> <span>Air</span><span>Fuel</span></span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
                  <SignedInLinks/>
              <span className="navbar-text">
                Welcome <strong>{auth.username}</strong> |{" "}<button onClick={this.fakeLogout}>Logout</button>
              </span>
          </div>
      </nav>
      );
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand"><span className="brand-name-left">Air</span><span className="brand-name-right">Fuel</span></span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
                
            </ul>
              <span className="navbar-text">
              <form onSubmit={this.fakeLogin}>
                <input
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  style={{ width: "100px", marginRight: "10px"}}
                  onChange={this.handleChange}
                />
                <input
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  style={{ width: "100px" }}
                  onChange={this.handleChange}
                  type="password"
                />
                &nbsp; | &nbsp;
                <button>Login</button> &nbsp;| &nbsp;
                <span>Not logged in</span>
              </form>
              </span>
          </div>
      </nav>
    );
  }
}

export default Header;

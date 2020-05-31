import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : "",
            email: '',
            password: ''
        }

        this.onChange = this.handleInputChanges.bind(this);
        this.onSubmit = this.handleSubmit.bind(this);
    }

    handleInputChanges = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <input type="text" name="email" className="form-control" value={this.state.email}  placeholder="Enter Email" onChange={this.onChange}></input>
                    </div>

                    <div className="form-group">
                        <input type="text" name="password" className="form-control" value={this.state.password}  placeholder="Enter Password" onChange={this.onChange}></input>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Sign In</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
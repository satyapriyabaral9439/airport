import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class SignedOutLinks extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to="/signin" className="nav-link">Sign In</NavLink>
                </li>
            </ul>
        )
    }
}

export default SignedOutLinks;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class SignedInLinks extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/report" className="nav-link">Report</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/transaction" className="nav-link">Transaction</NavLink>
                </li>
            </ul>
        )
    }
}

export default SignedInLinks;
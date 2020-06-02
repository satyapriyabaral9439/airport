import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initializeAirport, initializeAircraft } from '../../store/actions/airportAction'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order: false,
            airport_state: this.props.airports,
            aircraft_state: this.props.aircrafts
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.airports !== this.state.airport_state) {
            this.setState({ airport_state: this.props.airports })
        }
        if(this.props.aircrafts !== this.state.aircraft_state) {
            this.setState({ aircraft_state: this.props.aircrafts })
        }
    }

    initializeData(prevProps) {
        this.props.initializeAirport();
        this.props.initializeAircraft();
    }

    sortData = (data, key) => {
        let sortOrder = this.state.order
        this.setState({
            order: !sortOrder
        }, () => {
            data.sort(function (a, b) {
                return (sortOrder ? (a[key] > b[key] ? 1 : -1) : (a[key] > b[key] ? -1 : 1));
            });
            this.setState({})
        })
    }

    render() {
        return (
            <div className="container">
                <div className="text-center padding-14px">
                    <button className="btn btn-primary" onClick={() => this.initializeData()}>Initialize/Reset Airport and Aircraft Data</button>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th onClick={() => this.sortData(this.state.airport_state, "airport_name")}>Airport Name &#8593;&#8595;</th>
                                    <th onClick={() => this.sortData(this.state.airport_state, "fuel_capacity")}>Fuel Capacity &#8593;&#8595;</th>
                                    <th onClick={() => this.sortData(this.state.airport_state, "fuel_available")}>Fuel Available  &#8593;&#8595;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.airport_state.map((airport)=> {
                                        return <tr key={airport.airport_id}>
                                            <td>{airport.airport_name}</td>
                                            <td>{airport.fuel_capacity}</td>
                                            <td>{airport.fuel_available}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-5">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th onClick={() => this.sortData(this.state.aircraft_state, "aircraft_no")}>Aircraft No  &#8593;&#8595;</th>
                                    <th onClick={() => this.sortData(this.state.aircraft_state, "airline")}>Airline  &#8593;&#8595;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.aircraft_state.map((aircraft)=> {
                                        return <tr key={aircraft.aircraft_id}>
                                            <td>{aircraft.aircraft_no}</td>
                                            <td>{aircraft.airline}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        airports: state.airport.airports,
        aircrafts: state.airport.aircrafts,
        transactions: state.airport.transactions
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        initializeAircraft: () => dispatch(initializeAircraft()),
        initializeAirport: () => dispatch(initializeAirport())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
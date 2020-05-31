import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {sortAirport} from '../../store/actions/airportAction'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : []
        }
        this.sortAirport = this.sortAirport.bind(this);
    }

    sortAirport(airports, id) {
        console.log(airports);
        console.log(airports[4].airport_name);
        airports[4].airport_name = "satya";
        console.log(airports);
        console.log("inside");
            this.props.sortAirport(airports); 
    }

    render() {
        const { airports } = this.props;
        const { aircrafts } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>
                                        <button onClick={() => this.sortAirport(airports, 'airport_name')}>
                                            Airport Name
                                        </button>
                                        </th>
                                    <th>Fuel Capacity</th>
                                    <th>Fuel Available</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    airports.map((airport)=> {
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
                    <div className="col-md-6">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Aircraft No</th>
                                    <th>Airline</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    aircrafts.map((aircraft)=> {
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
        aircrafts: state.airport.aircrafts
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        sortAirport:sortAirport
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
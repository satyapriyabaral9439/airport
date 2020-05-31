import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sortAirport, addTransaction, reverseTransaction, updateAirport} from '../../store/actions/airportAction'
import CreateTransaction from '../airport/CreateTransaction.js'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    sortAirport(airports, key) {
        console.log(key)
        airports = airports.sort( (a, b) => a < b)
        console.log(airports)
    }

    onSave = (transaction_details) => {
       this.props.addTransaction(transaction_details);
       this.props.updateAirport(transaction_details, false);
    }

    onReverse = (transaction) => {
        console.log(transaction.transaction_id)
        this.props.reverseTransaction(transaction.transaction_id);
        this.props.updateAirport(transaction, true);
    }

    render() {
        const { aircrafts } = this.props;
        const { transactions } = this.props;
        let airport_data = []
        airport_data = Object.assign([], airport_data, this.props.airports);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Airport Name</th>
                                    <th>Fuel Capacity</th>
                                    <th>Fuel Available</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    airport_data.map((airport)=> {
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
                <div className="row">
                    <CreateTransaction airports={airport_data} aircrafts={aircrafts} transactions={transactions} onSave = {this.onSave} onReverse = {this.onReverse} />
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
    //return bindActionCreators({
        return {
            sortAirport: (airport) => dispatch(sortAirport(airport)),
            addTransaction: (transaction_details) => dispatch(addTransaction(transaction_details)),
            reverseTransaction: (transaction_Id) => dispatch(reverseTransaction(transaction_Id)),
            updateAirport: (transaction, reverse) => dispatch(updateAirport(transaction, reverse))
        }
    //},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
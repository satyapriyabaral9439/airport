import React, { Component } from 'react';

class AirportList extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    getAirportDom(airportId, airports) {
        for (var i=0; i < airports.length; i++) {
            if (airports[i].airport_id === airportId) {
                return airports[i].airport_name;
            }
        }
    }

    getAircraftDom(aircraftId, aircrafts, returnkey) {
        for (var i=0; i < aircrafts.length; i++) {
            if (aircrafts[i].aircraft_id === aircraftId) {
                if(returnkey === "aircraft_no") {
                    return aircrafts[i].aircraft_no;
                } else if(returnkey === "airline") {
                    return aircrafts[i].airline;
                }
            }
        }
    }

    getReverseButton(reverseId, transaction) {
        if(reverseId === true) {
            return <button disabled >Reversed</button>
        } else {
            return <button onClick={() => this.handleReverse(transaction)}>Reverse</button>
        }
    }

    handleReverse(transaction) {
        this.props.onReverse(transaction);  
    }
    render() {
        const aircrafts = this.props.aircrafts;
        const airports = this.props.airports;
        const transactions = this.props.transactions;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Transaction Id</th>
                                    <th>Date/Time</th>
                                    <th>Transaction Type</th>
                                    <th>Airport Name</th>
                                    <th>Aircraft No</th>
                                    <th>Airline</th>
                                    <th>Quantity</th>
                                    <th>Reverse</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    transactions.map((transaction)=> {
                                        return <tr key={transaction.transaction_id}>
                                            <td>{transaction.transaction_id}</td>
                                            <td>{transaction.transaction_date_time}</td>
                                            <td>{transaction.transaction_type}</td>
                                            <td>{this.getAirportDom(transaction.airport_id, airports)}</td>
                                            <td>{this.getAircraftDom(transaction.aircraft_id, aircrafts, "aircraft_no")}</td>
                                            <td>{this.getAircraftDom(transaction.aircraft_id, aircrafts, "airline")}</td>
                                            <td>{transaction.quantity}</td>
                                            <td>{this.getReverseButton(transaction.isReverse, transaction)}</td>
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

export default AirportList;
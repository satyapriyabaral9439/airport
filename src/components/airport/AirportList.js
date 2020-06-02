import React, { Component } from 'react';

class AirportList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transaction_state: this.props.transactions,
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.transactions !== this.state.transaction_state) {
            this.setState({ transaction_state: this.props.transactions })
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
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th onClick={() => this.sortData(this.state.transaction_state, "transaction_id")}>Id  &#8593;&#8595;</th>
                                    <th onClick={() => this.sortData(this.state.transaction_state, "transaction_date_time")}>Date/Time  &#8593;&#8595;</th>
                                    <th onClick={() => this.sortData(this.state.transaction_state, "transaction_type")}>Transaction Type  &#8593;&#8595;</th>
                                    <th>Airport Name</th>
                                    <th>Aircraft No</th>
                                    <th>Airline</th>
                                    <th>Quantity</th>
                                    <th>Reverse</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.transaction_state.map((transaction)=> {
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
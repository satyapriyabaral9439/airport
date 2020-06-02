import React, { Component } from 'react';
import { connect } from 'react-redux';

class AirportReport extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    getTransactionDom(airport_id) {
        var transactions = this.props.transactions;
        const items = []
        for (var i=0; i < transactions.length; i++) {
            if (transactions[i].airport_id === airport_id) {
                items.push( <div className="row">
                    <div className="col-md-3">{transactions[i].transaction_date_time}</div>
                    <div className="col-md-1">{transactions[i].transaction_type}</div>
                    <div className="col-md-1">{transactions[i].quantity}</div>
                    <div className="col-md-2">{this.getAircraftDom(transactions[i].aircraft_id)}</div>
                    <div className="col-md-2">{(transactions[i].isReverse === true ? "YES" : "NO")}</div>
                </div>
            )
            }
        }
        return items
    }

    getAircraftDom(aircraft_id) {
        var aircraftes = this.props.aircrafts;
        for (var i=0; i < aircraftes.length; i++) {
            if (aircraftes[i].aircraft_id === aircraft_id) {
                return (
                        aircraftes[i].aircraft_no
                )
            }
        }
    }

    render() {
        const { airports } = this.props;
        return (
            <div className="container">
                <h6>Airport Summery Report</h6>
                <div style={{fontFamily:"Courier New"}}>
                    <div className="row">
                        <div className="col-md-8">
                            Airport
                        </div>
                        <div className="col-md-4">
                            Fuel Available
                        </div>
                    </div>
                    <hr style={{borderTop: "1px dashed black"}}></hr>
                    {
                        airports.map((airport)=> {
                            return <div className="row" key={airport.airport_id}>
                                        <div className="col-md-8">
                                            {airport.airport_name}
                                        </div>
                                        <div className="col-md-4">
                                            {airport.fuel_available}
                                        </div>
                                    </div>
                                })
                    }
                </div>
                <br></br>
                <h6>Fuel Consumption Report</h6>
                <div style={{fontFamily:"Courier New"}}>
                    {
                        airports.map((airport)=> {
                            return <div key={airport.airport_id}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                Airport: {airport.airport_name}
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className="row">
                                            <div className="col-md-3">Date/Time</div>
                                            <div className="col-md-1">Type</div>
                                            <div className="col-md-1">Fuel</div>
                                            <div className="col-md-2">Aircraft</div>
                                            <div className="col-md-2">Is Cancelled</div>
                                        </div>
                                        {this.getTransactionDom(airport.airport_id)}
                                        <br></br>
                                        <div className="row">
                                            <div className="col-md-12">
                                                Fuel Available: {airport.fuel_available}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                -----
                                            </div>
                                        </div>
                                    </div>
                                })
                    }
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

export default connect(mapStateToProps)(AirportReport);
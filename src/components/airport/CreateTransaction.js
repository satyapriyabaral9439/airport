import React, { Component } from 'react';
import { connect } from 'react-redux';
import AirportList from './AirportList.js'
import { addTransaction, reverseTransaction, updateAirport } from '../../store/actions/airportAction'

class CreateTransaction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            airport_id : '',
            aircraft_id : '',
            fuel_in_out : '',
            transaction_date_time: '',
            transaction_type:'',
            quantity:'',
            airport_name:'',
            aircraft_no:'',
            airport_error: '',
            aircraft_error: '',
            quantity_error: '',
            type_error: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        if (this.checkForErrors() === false) {
            if(this.checkQuantityDetails() === false) {
                this.onSave(this.state);
                this.updateState();
            }
        }
    }

    updateState() {
        this.setState({ airport_id : '', aircraft_id : '', fuel_in_out : '', transaction_date_time: '', transaction_type:'', quantity:'', airport_name:'', aircraft_no:''})
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

    checkQuantityDetails() {
        var error = false
        var airportId = this.state.airport_id
        var airports = this.props.airports;
        for (var i=0; i < airports.length; i++) {
            if (airports[i].airport_id === airportId) {
                var updated_fuel_capacity = airports[i].fuel_capacity - airports[i].fuel_available;
                if(this.state.transaction_type === "IN") {
                    if(updated_fuel_capacity < this.state.quantity) {
                        alert("Not Enough Fuel Capacity");
                        error = true;
                    }
                } else {
                    if(airports[i].fuel_available < this.state.quantity) {
                        alert("Not Enough Fuel");
                        error = true;
                    }
                }
            }
        }
        console.log(error)
        return error
    }

    checkForErrors() {
        var error = false;
        if(this.state.airport_id.length < 1) {
            this.setState({airport_error : "Please Select Airport" })
            error = true;
        } else {
            this.setState({airport_error : "" })
        }
        if(this.state.aircraft_id.length < 1 && this.state.transaction_type === "OUT") {
            this.setState({aircraft_error : "Please Select Aicraft" })
            error = true;
        } else {
            this.setState({aircraft_error : "" })
        }
        if(this.state.transaction_type.length < 1) {
            this.setState({type_error : "Please Select Transaction Type" })
            error = true;
          } else {
            this.setState({type_error : "" })
          }
        if(this.state.quantity.length < 1 || this.state.quantity <= 0) {
            this.setState({quantity_error : "Please Enter a vadid Quantity" })
            error = true;
        } else {
            this.setState({quantity_error : "" })
        }
        return error;
    }

    handleInputChanges = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }
    render() {
        const { aircrafts } = this.props;
        const { airports } = this.props;
        const { transactions } = this.props;
        let renderAccordingCondition;
        if (this.state.transaction_type === "IN") {
            renderAccordingCondition =  <div className="col-sm-3">
                                            <input type="number" className="form-control" name="quantity" id="quantity"  value={this.state.quantity} placeholder="Enter Quantity" onChange={this.handleInputChanges}></input>
                                            <span style={{color:"red"}}>{this.state.quantity_error}</span>
                                        </div>;
          } else if (this.state.transaction_type === "OUT"){
            renderAccordingCondition = <div className="col-sm-6 row">
                                        <div className="col-sm-6">
                                            <select className="form-control" name="aircraft_id" id="category" value={this.state.aircraft_id} onChange={this.handleInputChanges}>
                                                <option value="">Select Airport</option>
                                                {
                                                    aircrafts.map((aircraft)=> {
                                                        return <option key={aircraft.aircraft_id} value={aircraft.aircraft_id}>{aircraft.aircraft_no}</option>
                                                    })
                                                }
                                            </select>
                                            <span style={{color:"red"}}>{this.state.aircraft_error}</span>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="number" className="form-control" name="quantity" id="quantity"  value={this.state.quantity} placeholder="Enter Quantity" onChange={this.handleInputChanges}></input>
                                            <span style={{color:"red"}}>{this.state.quantity_error}</span>
                                        </div></div>;
          }
        return (
            <div className="container">
                <form onSubmit = {this.handleSubmit}>
                    <div className="form-group row padding-14px">
                        <div className="col-sm-3">
                            <select className="form-control" name="airport_id" id="category" value={this.state.airport_id} onChange={this.handleInputChanges}>
                                <option value="">Select Airport</option>
                                {
                                    airports.map((airport)=> {
                                    return <option key={airport.airport_id} value={airport.airport_id}>{airport.airport_name}</option>
                                    })
                                }
                            </select>
                            <span style={{color:"red"}}>{this.state.airport_error}</span>
                        </div>
                        <div className="col-sm-3">
                            <select className="form-control" name="transaction_type" id="category" value={this.state.transaction_type} onChange={this.handleInputChanges}>
                                <option value="">Select Transaction Type</option>
                                    <option>IN</option>
                                    <option>OUT</option>
                            </select>
                            <span style={{color:"red"}}>{this.state.type_error}</span>
                        </div>
                        {renderAccordingCondition}
                    </div>
                    <div className="form-group text-center">
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>
                <AirportList airports={airports} aircrafts={aircrafts} transactions={transactions} onReverse = {this.onReverse}></AirportList>
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
        addTransaction: (transaction_details) => dispatch(addTransaction(transaction_details)),
        reverseTransaction: (transaction_Id) => dispatch(reverseTransaction(transaction_Id)),
        updateAirport: (transaction, reverse) => dispatch(updateAirport(transaction, reverse))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateTransaction);
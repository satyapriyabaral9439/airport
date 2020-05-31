import React, { Component } from 'react';
import AirportList from './AirportList.js'

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
            aircraft_no:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.onSave(this.state);
            //this.updateState(true);
        
    }
    handleInputChanges = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }
    render() {
        const aircrafts = this.props.aircrafts;
        const airports = this.props.airports;
        const transactions = this.props.transactions;
        let renderAccordingCondition;
        if (this.state.transaction_type === "IN") {
            renderAccordingCondition =  <div className="col-sm-3">
                                            <input type="text" className="form-control" name="quantity" id="quantity"  value={this.state.quantity} placeholder="Enter Quantity" onChange={this.handleInputChanges}></input>
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
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" name="quantity" id="quantity"  value={this.state.quantity} placeholder="Enter Quantity" onChange={this.handleInputChanges}></input>
                                        </div></div>;
          }
        return (
            <div className="container">
                <form onSubmit = {this.handleSubmit}>
                    <div className="form-group row">
                        <div className="col-sm-3">
                            <select className="form-control" name="airport_id" id="category" value={this.state.airport_id} onChange={this.handleInputChanges}>
                                <option value="">Select Airport</option>
                                {
                                    airports.map((airport)=> {
                                    return <option key={airport.airport_id} value={airport.airport_id}>{airport.airport_name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <select className="form-control" name="transaction_type" id="category" value={this.state.transaction_type} onChange={this.handleInputChanges}>
                                <option value="">Select Transaction Type</option>
                                    <option>IN</option>
                                    <option>OUT</option>
                            </select>
                        </div>
                        {renderAccordingCondition}
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-5">
                            <button type="submit">Save</button>
                        </div>
                    </div>
                </form>
                <AirportList airports={airports} aircrafts={aircrafts} transactions={transactions} onReverse = {this.props.onReverse}></AirportList>
            </div>
        )
    }
}

export default CreateTransaction;
import update from 'immutability-helper';
const initialState = {
    airports: [
        {airport_id: '1', airport_name: 'Chhatrapati Shivaji Airport', fuel_capacity:'70000', fuel_available:'45000'},
        {airport_id: '2', airport_name: 'Netaji Subhas Chandra Airport', fuel_capacity:'90000', fuel_available:'30000'},
        {airport_id: '3', airport_name: 'Hindustan Airport', fuel_capacity:'60000', fuel_available:'59000'},
        {airport_id: '4', airport_name: 'Indira Gandhi International Airport', fuel_capacity:'100000', fuel_available:'67000'},
        {airport_id: '5', airport_name: 'Chennai Airport', fuel_capacity:'75000', fuel_available:'75000'}
    ],
    aircrafts: [
        {aircraft_id: '1', aircraft_no: '6E 449', airline:'Indigo'},
        {aircraft_id: '2', aircraft_no: 'G8-1181', airline:'Go Air'},
        {aircraft_id: '3', aircraft_no: 'UK862', airline:'Vistara'},
        {aircraft_id: '4', aircraft_no: 'AI9511', airline:'Air India'},
        {aircraft_id: '5', aircraft_no: '6E 23', airline:'Indigo'}
    ],
    transactions: []
}
const airportReducer = (state = initialState, action) => {
    //return state
    var stateCopy = [];

    switch(action.type){

        case 'SORT_AIRPORT':
            var index = 4
            stateCopy = update(state, {airports: {[index]: {airport_name : {$set: "satya"}}}});
            return stateCopy
        case 'ADD_TRANSACTION':
            console.log(action.payload);
            var new_transaction_id = state.transactions.length + 1;
            var current_date = new Date().toLocaleString();
            if(action.payload.transaction_type === "OUT") {
                var new_aircraft_id = action.payload.aircraft_id;
            } else {
                new_aircraft_id = 0;
            }
            // console.log(new_transaction_id)
            stateCopy = update(state, {transactions: {$push: [{
                                            transaction_id : new_transaction_id,
                                            transaction_date_time : current_date,
                                            transaction_type : action.payload.transaction_type,
                                            airport_id: action.payload.airport_id,
                                            aircraft_id: new_aircraft_id,
                                            quantity: action.payload.quantity,
                                            isReverse: false
                                        }]}});
            console.log( stateCopy);
            // var index = 4
            // stateCopy = update(state, {airports: {[index]: {airport_name : {$set: "satya"}}}});
            //stateCopy = update(state, {airports: {[index]: {airport_name : {$set: "satya"}}}});
            return stateCopy
        default:
            return state;
        }
    
    }

export default airportReducer
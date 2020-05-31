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
    ]
}
const airportReducer = (state = initialState, action) => {
    //return state


    switch(action.type){

        case 'SORT_AIRPORT':
            console.log("success");
            console.log(action.payload);
           state.airports = action.payload;
           //console.log(stateCopy);
          // let stateCopy = [...state.airports,action.payload];
          // console.log(state);
           //console.log(stateCopy);
//localStorage.setItem('students',JSON.stringify(stateCopy));
return state
    // let stateCopy = [...state,action.payload];
    // localStorage.setItem('students',JSON.stringify(stateCopy));
            //return state;
    
        default:
            return state;
        }
    
    }

export default airportReducer
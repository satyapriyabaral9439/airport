import update from 'immutability-helper';
const defaultState = {
    users: [
        {user_id: '1', user_name: 'Satya', email: 'satya@gmail.com', password: 'satya', isSigned: false},
        {user_id: '2', user_name: 'Mindfire', email: 'mindfire@gmail.com', password: 'mindfire', isSigned: false},
        {user_id: '3', user_name: 'Rahul', email: 'rahul@gmail.com', password: 'rahul', isSigned: false}
    ]
}
const authReducer = (state = defaultState, action) => {
    var stateCopy = [];

    // switch(action.type){

        // case 'SORT_AIRPORT':
         

        // default:
        //     return state;
        // }
}

export default authReducer
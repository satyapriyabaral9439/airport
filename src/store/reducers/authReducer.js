import update from 'immutability-helper';
const initialState = {
    username: "",
    isLoggedIn: false,
    counter: 0 
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_LOGIN': 
            return {
                ...state,
                username: action.payload,
                isLoggedIn: true
            };
        case 'AUTH_LOGOUT':
            return initialState;
        case 'INCREMENT_PROGRESS':
            var newCounter =  state.counter + 1;
            return update(state, {counter: {$set: newCounter}}); 
        case 'DECREMENT_PROGRESS':
            newCounter =  Math.max(state.counter - 1, 0);;
            return update(state, {counter: {$set: newCounter}});   
        default:
            return state;
  }
};

export default authReducer;
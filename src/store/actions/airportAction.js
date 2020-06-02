export const initializeAircraft = () => {
    return (dispatch, getState) => {
        dispatch({ type:'INITIALIZE_AIRCRAFT',});
    }
};

export const initializeAirport = () => {
    return (dispatch, getState) => {
        dispatch({ type:'INITIALIZE_AIRPORT',});
    }
};

export const addTransaction = (transaction_details) => {
    return (dispatch, getState) => {
        dispatch({ type:'ADD_TRANSACTION', payload:transaction_details });
    }
};

export const reverseTransaction = (transaction_Id) => {
    return (dispatch, getState) => {
        dispatch({ type:'REVERSE_TRANSACTION', payload:transaction_Id });
    }
};

export const updateAirport = (transaction, reverse) => {
    return (dispatch, getState) => {
        dispatch({ type:'UPDATE_AIRPORT', payload:transaction, isReverse: reverse });
    }
};
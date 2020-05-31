export const sortAirport = (airport) => {
    return (dispatch, getState) => {
        dispatch({ type:'SORT_AIRPORT', payload:airport });
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
    console.log(reverse);
    return (dispatch, getState) => {
        dispatch({ type:'UPDATE_AIRPORT', payload:transaction, isReverse: reverse });
    }
};

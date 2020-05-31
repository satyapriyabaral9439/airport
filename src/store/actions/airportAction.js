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

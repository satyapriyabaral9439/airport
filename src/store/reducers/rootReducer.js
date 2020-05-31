import authReducer from './authReducer'
import airportReducer from './airportReducer'
import { DataTableReducer } from 'react-redux-datatable';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    airport: airportReducer,
    DataTable: DataTableReducer
})

export default rootReducer
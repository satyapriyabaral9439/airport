import authReducer from './authReducer'
import airportReducer from './airportReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    airport: airportReducer
})

export default rootReducer
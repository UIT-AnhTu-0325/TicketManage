import { combineReducers } from 'redux'

import trips from './trip'
import tickets from './ticket'
import routes from './route';
import { userLoginReducer, userProfileReducer, userUpdateReducer } from './userReducers'

export const reducers = combineReducers({
    trips,
    tickets,
    routes,
    userLogin: userLoginReducer,
    userUpdate: userUpdateReducer,
    userProfile: userProfileReducer
});
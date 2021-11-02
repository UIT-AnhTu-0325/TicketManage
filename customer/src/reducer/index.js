import { combineReducers } from 'redux'

import trips from './trip'
import tickets from './ticket'
import routes from './route';
import { userLoginReducer, userProfileReducer, userUpdateReducer, userRegisterReducer } from './userReducers'

export const reducers = combineReducers({
    trips,
    tickets,
    routes,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userUpdate: userUpdateReducer,
    userProfile: userProfileReducer
});
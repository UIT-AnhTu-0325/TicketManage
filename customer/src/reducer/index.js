import { combineReducers } from 'redux'

import trips from './trip'
import tickets from './ticket'
import routes from './route';
import locations from './location';
import { userLoginReducer, userProfileReducer, userUpdateReducer, userRegisterReducer } from './userReducers'

import books from './user_ticket';


export const reducers = combineReducers({
    trips,
    tickets,
    locations,
    routes,
    books,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userUpdate: userUpdateReducer,
    userProfile: userProfileReducer
});
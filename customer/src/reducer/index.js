import { combineReducers } from 'redux'

import trips from './trip'
import tickets from './ticket'
import routes from './route';

export const reducers = combineReducers({ trips, tickets, routes});
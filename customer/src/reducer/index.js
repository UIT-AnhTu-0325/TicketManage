import { combineReducers } from 'redux'

import trip from './trip'
import ticket from './ticket'
import routes from './route';

export const reducers = combineReducers({ trip, ticket, routes});
import { combineReducers } from 'redux'

import trip from './trip'
import ticket from './ticket'

export const reducers = combineReducers({ trip, ticket});
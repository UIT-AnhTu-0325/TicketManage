import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'
// import { userLoginReducer, userProfileReducer, userUpdateReducer } from './reducers/userReducers'
import { reducers } from "./reducer"

// const reducer = combineReducers({
//     userLogin: userLoginReducer,
//     userUpdate: userUpdateReducer,
//     userProfile: userProfileReducer

// })

const initialState = {}

//const middleware = [thunk]

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store
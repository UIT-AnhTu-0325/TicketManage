import {GET_ALL, GET_BY_ID, CREATE} from "../constant/actionType";

export default (routes = [], action) => {
    switch (action.type) {
        case GET_ALL: 
            return action.payload;
        case GET_BY_ID:
            return action.payload;
        case CREATE:
            return [...routes, action.payload];
        default:
            return routes;
    }
};
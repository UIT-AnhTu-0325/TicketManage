import { TRIP_GET_ALL,  TRIP_GET_BY_ID,  TRIP_CREATE,  TRIP_FETCH} from "../constant/actionType";

export default (trips = [], action) => {
    switch (action.type) {
        case TRIP_GET_ALL: 
            return action.payload;
        case TRIP_GET_BY_ID:
            return action.payload;
        case TRIP_CREATE:
            return [...trips, action.payload];
        case TRIP_FETCH:
            return action.payload;
        default:
            return trips;
    }
};
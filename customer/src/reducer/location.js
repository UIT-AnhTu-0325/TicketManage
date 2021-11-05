import { LOCATION_FETCH } from "../constant/actionType";

export default (locations = [], action) => {
    switch (action.type) {
        case LOCATION_FETCH:
            return action.payload;
        default:
            return locations;
    }
};
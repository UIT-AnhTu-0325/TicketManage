/* eslint-disable import/no-anonymous-default-export */
import { tripConstants } from "../actions/constants";
import routeReducer from "./route.reducers";

const rebuildAddTrip = (trips, trip) => {
  let mytrips = [];
  for (let veh of trips) {
    mytrips.push(veh);
  }
  mytrips.push(trip);
  return mytrips;
};

const initState = {
  trips: [],
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case tripConstants.ADD_NEW_TRIP_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case tripConstants.ADD_NEW_TRIP_SUCCESS:
      state = {
        ...state,
        trips: rebuildAddTrip(state.trips, action.payload.trip),
        loading: false,
      };
      break;
    case tripConstants.ADD_NEW_TRIP_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    default:
  }
  return state;
};

import { vehicleConstants } from "../actions/constants";

/* eslint-disable import/no-anonymous-default-export */
const initState = {
  vehicles: [],
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case vehicleConstants.GET_ALL_VEHICLES_SUCCESS:
      state = {
        ...state,
        vehicles: action.payload.vehicles,
      };
      break;

    default:
  }
  return state;
};

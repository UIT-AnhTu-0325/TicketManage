/* eslint-disable import/no-anonymous-default-export */
import { enterpriseConstants } from "../actions/constants";

const initState = {
  enterprises: [],
  loading: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case enterpriseConstants.GET_ALL_ENTERPRISES_SUCCESS:
      state = {
        ...state,
        enterprises: action.payload.enterprises,
      };
      break;
    case enterpriseConstants.ADD_NEW_ENTERPRISES_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case enterpriseConstants.ADD_NEW_ENTERPRISES_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case enterpriseConstants.ADD_NEW_ENTERPRISES_FAILURE:
      state = {
        ...initState,
      };
      break;
    default:
  }
  return state;
};

import { enterpriseConstants } from "../actions/constants";

const initState = {
  enterprises: [],
  loading: false,
  error: null,
};

const todo = (state = initState, action) => {
  switch (action.type) {
    case enterpriseConstants.GET_ALL_ENTERPRISES_SUCCESS:
      state = {
        ...state,
        enterprises: action.payload.enterprises,
      };
      break;

    default:
  }
  return state;
};

export default todo;

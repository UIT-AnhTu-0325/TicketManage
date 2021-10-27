/* eslint-disable import/no-anonymous-default-export */
import { enterpriseConstants } from "../actions/constants";

const initState = {
  enterprises: [],
  loading: false,
  error: null,
};

const buildNewEnterprises = (enterprises, enterprise) => {
  let myEnterprises = [];
  for (let ent of enterprises) {
    myEnterprises.push(ent);
  }
  myEnterprises.push(enterprise);

  return myEnterprises;
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
        enterprises: buildNewEnterprises(
          state.enterprises,
          action.payload.enterprise
        ),
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

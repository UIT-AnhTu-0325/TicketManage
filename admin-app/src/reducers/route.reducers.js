/* eslint-disable import/no-anonymous-default-export */
import { routerConstants } from "../actions/constants";

const initState = {
  routes: [],
  loading: false,
  error: null,
};

// const rebuildAddRoutes = (routes, route) => {
//   let myRoutes = [];
//   for (let rou of routes) {
//     myRoutes.push(rou);
//   }
//   myRoutes.push(route);

//   return myRoutes;
// };

export default (state = initState, action) => {
  switch (action.type) {
    case routerConstants.GET_ALL_ROUTES_SUCCESS:
      state = {
        ...state,
        routes: action.payload.routes,
      };
      break;
    default:
  }
  return state;
};

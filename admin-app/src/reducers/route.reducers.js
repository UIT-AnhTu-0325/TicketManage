/* eslint-disable import/no-anonymous-default-export */
import { routerConstants } from "../actions/constants";

const initState = {
  routes: [],
  loading: false,
  error: null,
};

const rebuildAddRoutes = (routes, route) => {
  let myRoutes = [];
  for (let rou of routes) {
    myRoutes.push(rou);
  }
  myRoutes.push(route);

  return myRoutes;
};

const rebuildEditRoutes = (routes, route) => {
  let myRoutes = [];
  for (let rou of routes) {
    myRoutes.push(rou._id === route._id ? route : rou);
  }

  return myRoutes;
};

const rebuildDelRoutes = (routes, id) => {
  let myRoutes = [];
  for (let rou of routes) {
    if (rou._id !== id) {
      myRoutes.push(rou);
    }
  }
  return myRoutes;
};

export default (state = initState, action) => {
  switch (action.type) {
    case routerConstants.GET_ALL_ROUTES_SUCCESS:
      state = {
        ...state,
        routes: action.payload.routes,
      };
      break;
    case routerConstants.ADD_NEW_ROUTE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case routerConstants.ADD_NEW_ROUTE_SUCCESS:
      state = {
        ...state,
        routes: rebuildAddRoutes(state.routes, action.payload.route),
        loading: false,
      };
      break;
    case routerConstants.ADD_NEW_ROUTE_FAILURE:
      state = {
        ...initState,
      };
      break;
    case routerConstants.EDIT_ROUTE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case routerConstants.EDIT_ROUTE_SUCCESS:
      state = {
        ...state,
        routes: rebuildEditRoutes(state.routes, action.payload.route),
        loading: false,
      };
      break;
    case routerConstants.EDIT_ROUTE_FAILURE:
      state = {
        ...initState,
      };
      break;
    case routerConstants.DELETE_ROUTE_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case routerConstants.DELETE_ROUTE_SUCCESS:
      state = {
        ...state,
        routes: rebuildDelRoutes(state.routes, action.payload.id),
        loading: false,
      };
      break;
    case routerConstants.DELETE_ROUTE_FAILURE:
      state = {
        ...initState,
      };
      break;
    default:
  }
  return state;
};

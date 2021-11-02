/* eslint-disable import/no-anonymous-default-export */
import axios from "../helpers/axios";
import { routerConstants } from "./constants";

export const getAllRoutes = () => {
  return async (dispatch) => {
    dispatch({ type: routerConstants.GET_ALL_ROUTES_REQUEST });
    const res = await axios.get(`route`);
    console.log(res);
    if (res.status === 200) {
      const routeList = res.data;
      dispatch({
        type: routerConstants.GET_ALL_ROUTES_SUCCESS,
        payload: { routes: routeList },
      });
    } else {
      dispatch({
        type: routerConstants.GET_ALL_ROUTES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const addRoute = (form) => {
  return async (dispatch) => {
    dispatch({ type: routerConstants.ADD_NEW_ROUTE_REQUEST });
    const res = await axios.post(`route/create`, {
      ...form,
    });
    if (res.status === 200) {
      dispatch({
        type: routerConstants.ADD_NEW_ROUTE_SUCCESS,
        payload: { route: res.data },
      });
    } else {
      dispatch({
        type: routerConstants.ADD_NEW_ROUTE_FAILURE,
        payload: { error: res.data.error },
      });
    }
    console.log(res);
  };
};

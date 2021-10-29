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

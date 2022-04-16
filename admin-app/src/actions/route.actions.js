/* eslint-disable import/no-anonymous-default-export */
import axios from "../helpers/axios";
import { routerConstants } from "./constants";

export const getAllRoutes = () => {
  return async (dispatch) => {
    dispatch({ type: routerConstants.GET_ALL_ROUTES_REQUEST });
    const res = await axios.get(`route`);
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
  };
};

export const editRoute = (form) => {
  return async (dispatch) => {
    dispatch({ type: routerConstants.EDIT_ROUTE_REQUEST });
    const res = await axios.put(`/route/${form._id}`, {
      ...form,
    });
    if (res.status === 200) {
      dispatch({
        type: routerConstants.EDIT_ROUTE_SUCCESS,
        payload: { route: res.data },
      });
    } else {
      dispatch({
        type: routerConstants.EDIT_ROUTE_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const deleteRoute = (form) => {
  return async (dispatch) => {
    dispatch({ type: routerConstants.DELETE_ROUTE_REQUEST });
    const res = await axios.delete(`/route/${form._id}`);
    if (res.status === 200) {
      dispatch({
        type: routerConstants.DELETE_ROUTE_SUCCESS,
        payload: { id: form._id },
      });
    } else {
      dispatch({
        type: routerConstants.DELETE_ROUTE_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getRouteDetailssById = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: routerConstants.GET_ROUTES_DETAILS_BY_ID_REQUEST,
    });

    const { routeId } = payload.params;
    const res = await axios.get(`/route/${routeId}/informations`);
    try {
      if (res.status === 200) {
        dispatch({
          type: routerConstants.GET_ROUTES_DETAILS_BY_ID_SUCCESS,
          payload: { routeDetails: res.data },
        });
      }
    } catch (error) {
      dispatch({
        type: routerConstants.GET_ROUTES_DETAILS_BY_ID_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

import axios from "../helpers/axios";
import { tripConstants } from "./constants";
import { addTicketOfTrip } from "./ticket.actions";
export const addTrip = (form) => {
  return async (dispatch) => {
    dispatch({ type: tripConstants.ADD_NEW_TRIP_REQUEST });
    const res = await axios.post(`trip/create`, {
      ...form,
    });

    if (res.status === 200) {
      dispatch(addTicketOfTrip({ ...form, _id: res.data._id }));
      dispatch({
        type: tripConstants.ADD_NEW_TRIP_SUCCESS,
        payload: { trip: res.data },
      });
    } else {
      dispatch({
        type: tripConstants.ADD_NEW_TRIP_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const editTrip = (form) => {
  return async (dispatch) => {
    //console.log(form);
    dispatch({ type: tripConstants.EDIT_TRIP_REQUEST });
    const res = await axios.put(`/trip/${form._id}`, {
      ...form,
    });
  };
};

export const getTripDetailsById = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: tripConstants.GET_TRIP_DETAILS_BY_ID_REQUEST,
    });

    const { tripId } = payload.params;
    const res = await axios.get(`/trip/${tripId}/informations`);
    try {
      if (res.status === 200) {
        dispatch({
          type: tripConstants.GET_TRIP_DETAILS_BY_ID_SUCCESS,
          payload: { tripDetails: res.data },
        });
      }
    } catch (error) {
      dispatch({
        type: tripConstants.GET_TRIP_DETAILS_BY_ID_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

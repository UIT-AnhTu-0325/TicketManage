import axiosIntance from "../helpers/axios";
import { steersmanConstants } from "./constants";

export const addSteersman = (form) => {
  return async (dispatch) => {
    dispatch({ type: steersmanConstants.ADD_NEW_STEERSMAN_REQUEST });
    const res = await axiosIntance.post(`steersman/create`, {
      ...form,
    });
    if (res.status === 200) {
      dispatch({
        type: steersmanConstants.ADD_NEW_STEERSMAN_SUCCESS,
        payload: { steersman: res.data },
      });
    } else {
      dispatch({
        type: steersmanConstants.ADD_NEW_STEERSMAN_FAILURE,
        payload: { error: res.data.error },
      });
    }
    //console.log(res);
  };
};

export const editSteersman = (form) => {
  return async (dispatch) => {
    dispatch({ type: steersmanConstants.EDIT_STEERSMAN_REQUEST });
    const res = await axiosIntance.put(`/steersman/${form._id}`, {
      ...form,
    });
    if (res.status === 200) {
      dispatch({
        type: steersmanConstants.EDIT_STEERSMAN_SUCCESS,
        payload: { steersman: res.data },
      });
    } else {
      dispatch({
        type: steersmanConstants.EDIT_STEERSMAN_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

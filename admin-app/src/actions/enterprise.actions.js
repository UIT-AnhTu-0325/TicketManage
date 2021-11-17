import axios from "../helpers/axios";
import { enterpriseConstants } from "./constants";
import swal from "sweetalert";

export const getAllEnterprises = () => {
  return async (dispatch) => {
    dispatch({ type: enterpriseConstants.GET_ALL_ENTERPRISES_REQUEST });
    const res = await axios.get(`enterprise`);
    console.log(res);
    if (res.status === 200) {
      const { enterpriseList } = res.data;
      dispatch({
        type: enterpriseConstants.GET_ALL_ENTERPRISES_SUCCESS,
        payload: { enterprises: enterpriseList },
      });
    } else {
      dispatch({
        type: enterpriseConstants.GET_ALL_ENTERPRISES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const addEnterprise = (form) => {
  return async (dispatch) => {
    dispatch({ type: enterpriseConstants.ADD_NEW_ENTERPRISES_REQUEST });
    const res = await axios.post(`/enterprise/create`, {
      ...form,
    });
    if (res.status === 200) {
      dispatch({
        type: enterpriseConstants.ADD_NEW_ENTERPRISES_SUCCESS,
        payload: { enterprise: res.data },
      });
    } else {
      dispatch({
        type: enterpriseConstants.ADD_NEW_ENTERPRISES_FAILURE,
        payload: { error: res.data.error },
      });
    }
    console.log(res);
  };
};

export const editEnterprise = (form) => {
  return async (dispatch) => {
    dispatch({ type: enterpriseConstants.EDIT_ENTERPRIESE_REQUEST });
    const res = await axios.put(`/enterprise/${form._id}`, {
      ...form,
    });
    if (res.status === 200) {
      dispatch({
        type: enterpriseConstants.EDIT_ENTERPRIESE_SUCCESS,
        payload: { enterprise: res.data },
      });
    } else {
      dispatch({
        type: enterpriseConstants.EDIT_ENTERPRIESE_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const deleteEnterprise = (form) => {
  return async (dispatch) => {
    dispatch({ type: enterpriseConstants.DELETE_ENTERPRIESE_REQUEST });
    const res = await axios.delete(`/enterprise/${form._id}`);
    if (res.status === 200) {
      dispatch({
        type: enterpriseConstants.DELETE_ENTERPRIESE_SUCCESS,
        payload: { id: form._id },
      });
    } else {
      dispatch({
        type: enterpriseConstants.DELETE_ENTERPRIESE_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getEnterpriseDetailsById = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: enterpriseConstants.GET_ENTERPRISES_DETAILS_BY_ID_REQUEST,
    });

    const { enterpriseId } = payload.params;
    const res = await axios.get(`/enterprise/${enterpriseId}/informations`);
    try {
      if (res.status === 200) {
        dispatch({
          type: enterpriseConstants.GET_ENTERPRISES_DETAILS_BY_ID_SUCCESS,
          payload: { enterpriseDetails: res.data },
        });
      }
    } catch (error) {
      dispatch({
        type: enterpriseConstants.GET_ENTERPRISES_DETAILS_BY_ID_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

import axios from "../helpers/axios";
import { enterpriseConstants } from "./constants";

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
        payload: res.data,
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

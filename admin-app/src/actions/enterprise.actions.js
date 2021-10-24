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
    const res = await axios.post("enterprise/create", form);
    console.log(res);
  };
};

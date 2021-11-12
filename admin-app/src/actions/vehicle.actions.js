import axios from "../helpers/axios";
import { vehicleConstants } from "./constants";

export const getAllVehicles = () => {
  return async (dispatch) => {
    dispatch({ type: vehicleConstants.GET_ALL_VEHICLES_REQUEST });
    const res = await axios.get(`vehicle`);
    console.log(res);
    if (res.status === 200) {
      const vehicleList = res.data;
      dispatch({
        type: vehicleConstants.GET_ALL_VEHICLES_SUCCESS,
        payload: { vehicles: vehicleList },
      });
    } else {
      dispatch({
        type: vehicleConstants.GET_ALL_VEHICLES_FAILURE,
        payload: { errorl: res.data.error },
      });
    }
  };
};

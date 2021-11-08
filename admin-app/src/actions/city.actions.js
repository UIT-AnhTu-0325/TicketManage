import axios from "../helpers/axios";
import { cityConstants } from "./constants";

export const getAllCities = () => {
  return async (dispatch) => {
    dispatch({ type: cityConstants.GET_ALL_CITIES_REQUEST });
    const res = await axios.get(`city`);
    console.log(res);
    if (res.status === 200) {
      const cityList = res.data;
      dispatch({
        type: cityConstants.GET_ALL_CITIES_SUCCESS,
        payload: { cities: cityList },
      });
    } else {
      dispatch({
        type: cityConstants.GET_ALL_CITIES_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

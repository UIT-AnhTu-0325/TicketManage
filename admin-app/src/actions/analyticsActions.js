import axios from "../helpers/axios";
import { ANALYTICS_REQUEST, ANALYTICS_SUCCESS, ANALYTICS_FAIL } from "../constants/analyticsConstants"
import { DateRangeTwoTone } from "@material-ui/icons";

export const getByMonthYear = (date) => async (dispatch) => {
    try {
        dispatch({ type: ANALYTICS_REQUEST });
        const { data } = await axios.post(`ticket/getByMonthYear`, date)
        console.log(data);
        dispatch({ type: ANALYTICS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ANALYTICS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
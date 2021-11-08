import axios from "../helpers/axios";
import { ANALYTICS_REQUEST, ANALYTICS_SUCCESS, ANALYTICS_FAIL, ANALYTICS_CHART_REQUEST, ANALYTICS_CHART_SUCCESS, ANALYTICS_CHART_FAIL } from "../constants/analyticsConstants"
import { DateRangeTwoTone } from "@material-ui/icons";

export const getCurrentMonth = (date) => async (dispatch) => {
    try {
        dispatch({ type: ANALYTICS_REQUEST });
        const { data } = await axios.post(`ticket/getMonthByMonthYear`, date)
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

export const getDateByMonthYear = (date) => async (dispatch) => {
    try {
        dispatch({ type: ANALYTICS_CHART_REQUEST });
        const { data } = await axios.post(`ticket/getDateByMonthYear`, date)
        console.log(date);
        console.log(data);
        dispatch({ type: ANALYTICS_CHART_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ANALYTICS_CHART_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}


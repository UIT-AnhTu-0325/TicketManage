import axios from "../helpers/axios";
import { ANALYTICS_REQUEST, ANALYTICS_SUCCESS, ANALYTICS_FAIL, ANALYTICS_CHART_REQUEST, ANALYTICS_CHART_SUCCESS, ANALYTICS_CHART_FAIL, NEW_USER_REQUEST, NEW_USER_SUCCESS, NEW_USER_FAIL, TICKET_DONUT_REQUEST, TICKET_DONUT_SUCCESS, TICKET_DONUT_FAIL } from "../constants/analyticsConstants"
import { DateRangeTwoTone } from "@material-ui/icons";

export const getTicketCanceled = (date) => async (dispatch) => {
    try {
        dispatch({ type: TICKET_DONUT_REQUEST });
        const { data } = await axios.post(`user_ticket/getTicketCanceled`, date)
        console.log(data);
        dispatch({ type: TICKET_DONUT_SUCCESS, payload: data })
        localStorage.setItem("ticket", JSON.stringify(data))
        localStorage.setItem("ticketCanceled", data.map(a => a.totalCanceledTicket));
    } catch (error) {
        dispatch({
            type: TICKET_DONUT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const getCurrentMonth = (date) => async (dispatch) => {
    try {
        dispatch({ type: ANALYTICS_REQUEST });
        const { data } = await axios.post(`ticket/getMonthByMonthYear`, date)
        console.log(data);
        dispatch({ type: ANALYTICS_SUCCESS, payload: data })
        localStorage.setItem("analytics", JSON.stringify(data))
        localStorage.setItem("totalTickets", data.map(a => a.totalTicket));
        localStorage.setItem("totalSales", data.map(a => a.totalSale));
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

export const getNewUser = (date) => async (dispatch) => {
    try {
        dispatch({ type: NEW_USER_REQUEST });
        const { data } = await axios.post(`/getNewUser`, date)
        console.log(date);
        console.log(data);
        dispatch({ type: NEW_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: NEW_USER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}


import axios from "../helpers/axios";
import {
    ANALYTICS_REQUEST, ANALYTICS_SUCCESS, ANALYTICS_FAIL,
    ANALYTICS_CHART_REQUEST, ANALYTICS_CHART_SUCCESS, ANALYTICS_CHART_FAIL,
    NEW_USER_REQUEST, NEW_USER_SUCCESS, NEW_USER_FAIL,
    TICKET_DONUT_REQUEST, TICKET_DONUT_SUCCESS, TICKET_DONUT_FAIL,
    CURRENT_DATE_REQUEST, CURRENT_DATE_SUCCESS, CURRENT_DATE_FAIL,
    CHART_ENTERPRISE_REQUEST, CHART_ENTERPRISE_SUCCESS, CHART_ENTERPRISE_FAIL,
    LIST_ENTERPRISE_REQUEST, LIST_ENTERPRISE_SUCCESS, LIST_ENTERPRISE_FAIL, NAME_CHART_ENTERPRISE_REQUEST, NAME_CHART_ENTERPRISE_SUCCESS, NAME_CHART_ENTERPRISE_FAIL, LAST_ORDER_REQUEST, LAST_ORDER_SUCCESS, LAST_ORDER_FAIL
}
    from "../constants/analyticsConstants"
import { DateRangeTwoTone } from "@material-ui/icons";

export const getLastOrder = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: LAST_ORDER_REQUEST });
            const { data } = await axios.get(`user_ticket/getLastOrder`)
            console.log(data);
            dispatch({ type: LAST_ORDER_SUCCESS, payload: data })
        } catch (error) {
            dispatch({
                type: LAST_ORDER_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
            })
        }
    }
}

export const getAllName = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: LIST_ENTERPRISE_REQUEST });
            const { data } = await axios.get(`enterprise/getAllName`)
            console.log(data);
            dispatch({ type: NAME_CHART_ENTERPRISE_SUCCESS, payload: data })
        } catch (error) {
            dispatch({
                type: NAME_CHART_ENTERPRISE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
            })
        }
    }
}

export const getCurrentByEnterprisesList = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: LIST_ENTERPRISE_REQUEST });
            const { data } = await axios.get(`user_ticket/getCurrentByEnterprisesList`)
            console.log(data);
            dispatch({ type: LIST_ENTERPRISE_SUCCESS, payload: data })
        } catch (error) {
            dispatch({
                type: LIST_ENTERPRISE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
            })
        }
    }
}

export const getCurrentByEnterprises = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: CHART_ENTERPRISE_REQUEST });
            const data = await axios.get(`user_ticket/getCurrentByEnterprises`)
            console.log(data);
            const { booking, sale } = data.data;
            dispatch({
                type: CHART_ENTERPRISE_SUCCESS,
                payload: {
                    booking,
                    sale
                }
            })
        } catch (error) {
            dispatch({
                type: CHART_ENTERPRISE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
            })
        }
    }
}


export const getCurrentDate = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: CURRENT_DATE_REQUEST });
            const { data } = await axios.get(`user_ticket/getCurrentDate`)
            console.log(data);
            dispatch({ type: CURRENT_DATE_SUCCESS, payload: data })
        } catch (error) {
            dispatch({
                type: CURRENT_DATE_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
            })
        }
    }
}

export const getTicketCanceled = (date) => async (dispatch) => {
    try {
        dispatch({ type: TICKET_DONUT_REQUEST });
        const { data } = await axios.post(`user_ticket/getTicketCanceled`, date)
        console.log(data);
        // const { totalCanceledTicket } = data.data;
        // dispatch({
        //     type: TICKET_DONUT_SUCCESS,
        //     payload: {
        //         totalCanceledTicket
        //     }
        // })
        dispatch({ type: TICKET_DONUT_SUCCESS, payload: data })
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
        const data = await axios.post(`ticket/getMonthByMonthYear`, date)
        console.log(data);
        const { totalTicket, totalSale } = data.data;
        dispatch({
            type: ANALYTICS_SUCCESS,
            payload: {
                totalTicket,
                totalSale
            }
        })
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
        const data = await axios.post(`ticket/getDateByMonthYear`, date)
        //console.log(date);
        //console.log(data);
        const { listTicket, listSale } = data.data;
        dispatch({
            type: ANALYTICS_CHART_SUCCESS,
            payload: {
                listTicket,
                listSale
            }
        })
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
        //console.log(date);
        //console.log(data);
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


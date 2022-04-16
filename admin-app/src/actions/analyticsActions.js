import axios from "../helpers/axios";
import { DateRangeTwoTone } from "@material-ui/icons";
import { analyticsConstants } from "./constants";

export const getLastOrder = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: analyticsConstants.LAST_ORDER_REQUEST });
      const { data } = await axios.get(`user_ticket/getLastOrder`);

      dispatch({ type: analyticsConstants.LAST_ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: analyticsConstants.LAST_ORDER_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const getAllName = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: analyticsConstants.LIST_ENTERPRISE_REQUEST });
      const { data } = await axios.get(`enterprise/getAllName`);

      dispatch({
        type: analyticsConstants.NAME_CHART_ENTERPRISE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: analyticsConstants.NAME_CHART_ENTERPRISE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const getCurrentByEnterprisesList = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: analyticsConstants.LIST_ENTERPRISE_REQUEST });

      const { data } = await axios.get(
        `user_ticket/getCurrentByEnterprisesList`
      );
      dispatch({
        type: analyticsConstants.LIST_ENTERPRISE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: analyticsConstants.LIST_ENTERPRISE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const getCurrentByEnterprises = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: analyticsConstants.CHART_ENTERPRISE_REQUEST });
      const data = await axios.get(`user_ticket/getCurrentByEnterprises`);

      const { booking, sale } = data.data;
      dispatch({
        type: analyticsConstants.CHART_ENTERPRISE_SUCCESS,
        payload: {
          booking,
          sale,
        },
      });
    } catch (error) {
      dispatch({
        type: analyticsConstants.CHART_ENTERPRISE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const getCurrentDate = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: analyticsConstants.CURRENT_DATE_REQUEST });
      const { data } = await axios.get(`user_ticket/getCurrentDate`);

      dispatch({
        type: analyticsConstants.CURRENT_DATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: analyticsConstants.CURRENT_DATE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const getTicketCanceled = (date) => async (dispatch) => {
  try {
    dispatch({ type: analyticsConstants.TICKET_DONUT_REQUEST });
    const { data } = await axios.post(`user_ticket/getTicketCanceled`, date);

    // const { totalCanceledTicket } = data.data;
    // dispatch({
    //     type: analyticsConstants.TICKET_DONUT_SUCCESS,
    //     payload: {
    //         totalCanceledTicket
    //     }
    // })
    dispatch({ type: analyticsConstants.TICKET_DONUT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: analyticsConstants.TICKET_DONUT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCurrentMonth = (date) => async (dispatch) => {
  try {
    dispatch({ type: analyticsConstants.ANALYTICS_REQUEST });
    const data = await axios.post(`ticket/getMonthByMonthYear`, date);

    const {
      totalTicket,
      totalSale,
      totalCanceledTicket,
      totalNewUser,
    } = data.data;
    dispatch({
      type: analyticsConstants.ANALYTICS_SUCCESS,
      payload: {
        totalTicket,
        totalSale,
        totalCanceledTicket,
        totalNewUser,
      },
    });
  } catch (error) {
    dispatch({
      type: analyticsConstants.ANALYTICS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getDateByMonthYear = (date) => async (dispatch) => {
  try {
    dispatch({ type: analyticsConstants.ANALYTICS_CHART_REQUEST });
    const data = await axios.post(`ticket/getDateByMonthYear`, date);

    const { listTicket, listSale } = data.data;
    dispatch({
      type: analyticsConstants.ANALYTICS_CHART_SUCCESS,
      payload: {
        listTicket,
        listSale,
      },
    });
  } catch (error) {
    dispatch({
      type: analyticsConstants.ANALYTICS_CHART_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getNewUser = (date) => async (dispatch) => {
  try {
    dispatch({ type: analyticsConstants.NEW_USER_REQUEST });
    const { data } = await axios.post(`/getNewUser`, date);

    dispatch({ type: analyticsConstants.NEW_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: analyticsConstants.NEW_USER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

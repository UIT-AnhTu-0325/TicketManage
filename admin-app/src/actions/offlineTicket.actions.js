import axios from "../helpers/axios";
import { ticketConstants } from "./constants";

export const addOfflineTicket = (form, ticket) => {
  return async (dispatch) => {
    dispatch({ type: ticketConstants.ADD_NEW_OFFLINETICKET_REQUEST });
    //console.log(ticket);
    const res = await axios.post(`offline_phone_ticket/create`, {
      ...form,
    });
    await axios.put(`http://localhost:2000/api/ticket/${ticket._id}`, ticket);
    if (res.status === 200) {
      dispatch({
        type: ticketConstants.ADD_NEW_OFFLINETICKET_SUCCESS,
        payload: { offlineTicket: res.data },
      });
    } else {
      dispatch({
        type: ticketConstants.ADD_NEW_OFFLINETICKET_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getAllOfflineTicket = () => {
  return async (dispatch) => {
    dispatch({ type: ticketConstants.GET_ALL_OFFLINETICKETS_REQUEST });
    try {
      const res = await axios.get(`offline_phone_ticket`);
      if (res.status === 200) {
        const offlineTicketList = res.data;
        console.log(res.data);
        dispatch({
          type: ticketConstants.GET_ALL_OFFLINETICKETS_SUCCESS,
          payload: { offlineTickets: offlineTicketList },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: ticketConstants.GET_ALL_OFFLINETICKETS_FAILURE,
        payload: { error: error },
      });
    }
  };
};

import axios from "../helpers/axios";
import { ticketConstants } from "./constants";

export const getAllTickets = () => {
  return async (dispatch) => {
    dispatch({ type: ticketConstants.GET_ALL_TICKETS_REQUEST });
    const res = await axios.get(`ticket`);
    //console.log(res);
    if (res.status === 200) {
      const ticketList = res.data;
      dispatch({
        type: ticketConstants.GET_ALL_TICKETS_SUCCESS,
        payload: { tickets: ticketList },
      });
    } else {
      dispatch({
        type: ticketConstants.GET_ALL_TICKETS_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const addTicketOfTrip = (form) => {
  return async (dispatch) => {
    var newForm = { idTrip: form._id, price: form.price };
    newForm.quantity = Array(form.totalSeat).fill(false);
    console.log(newForm);
    dispatch({ type: ticketConstants.ADD_NEW_TICKET_REQUEST });
    const res = await axios.post(`ticket/create`, {
      ...newForm,
    });

    if (res.status === 200) {
      dispatch({
        type: ticketConstants.ADD_NEW_TICKET_SUCCESS,
        payload: { ticket: res.data },
      });
    } else {
      dispatch({
        type: ticketConstants.ADD_NEW_TICKET_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

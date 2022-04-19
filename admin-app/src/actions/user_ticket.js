import {
  BOOK_SUCCESS,
  BOOK_FAILURE,
  BOOK_GET_ALL,
} from "../constants/actionType";

import UserTicketApi, * as api from "../api/user_ticket";
import axios from "axios";

export const createNew = (newBook, ticket) => async (dispatch) => {
  try {
    const { data } = await UserTicketApi.createNew(newBook);

    await axios.put(`http://localhost:2000/api/ticket/${ticket._id}`, ticket);

    dispatch({ type: BOOK_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: BOOK_FAILURE, payload: error });
  }
};

export const update = (newBook, ticket, id) => async (dispatch) => {
  try {
    await UserTicketApi.update(newBook, id);

    await axios.put(`http://localhost:2000/api/ticket/${ticket._id}`, ticket);

    const { data } = await UserTicketApi.getAll();

    dispatch({ type: BOOK_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: BOOK_FAILURE, payload: error });
  }
};

export const getAll = () => async (dispatch) => {
  try {
    const { data } = await UserTicketApi.getAll();

    dispatch({ type: BOOK_GET_ALL, payload: data });
  } catch (error) {
    dispatch({ type: BOOK_FAILURE, payload: error });
  }
};

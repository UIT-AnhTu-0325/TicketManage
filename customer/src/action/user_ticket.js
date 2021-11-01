import { BOOK_SUCCESS, BOOK_FAILURE } from "../constant/actionType";

import * as api from '../api/user_ticket';
import axios from "axios";



export const createNew = (newBook, ticket) => async (dispatch) => {
    try {
        const { data }= await api.createNew(newBook);
        await axios.put(`http://localhost:2000/api/ticket/${ticket._id}`,ticket);
        dispatch({ type: BOOK_SUCCESS, payload: data});
    } catch (error) {
        dispatch({ type: BOOK_FAILURE, payload: error});
    }
}
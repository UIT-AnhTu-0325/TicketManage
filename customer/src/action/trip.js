import {GET_ALL, GET_BY_ID, CREATE} from "../constant/actionType";

import * as api from '../api/trip.js';

export const getAll = () => async (dispatch) => {
    try {
        const data = await api.getAll();

        dispatch({ type: GET_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const getById = (id) => async (dispatch) => {
    try {
        const data = await api.getById(id);

        dispatch({ type: GET_BY_ID, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createNew = (newTrip) => async (dispatch) => {
    try {
        const data = await api.createNew(newTrip);

        dispatch({ type: CREATE, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}
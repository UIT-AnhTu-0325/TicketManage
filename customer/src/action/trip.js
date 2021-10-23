import { TRIP_GET_ALL,  TRIP_GET_BY_ID,  TRIP_CREATE,  TRIP_FETCH} from "../constant/actionType";

import * as api from '../api/trip.js';

export const getAll = () => async (dispatch) => {
    try {
        const { data } = await api.getAll();

        dispatch({ type:  TRIP_GET_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const fetch = () => async (dispatch) => {
    try {
        const { data } = await api.fetch();

        dispatch({ type:  TRIP_FETCH, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const getById = (id) => async (dispatch) => {
    try {
        const { data } = await api.getById(id);

        dispatch({ type:  TRIP_GET_BY_ID, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createNew = (newTrip) => async (dispatch) => {
    try {
        const { data } = await api.createNew(newTrip);

        dispatch({ type:  TRIP_CREATE, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}
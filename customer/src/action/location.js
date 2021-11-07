import {LOCATION_FETCH} from "../constant/actionType";

import * as api from '../api/location';

export const fetch = () => async (dispatch) => {
    try {
        const { data } = await api.fetch();

        dispatch({ type:  LOCATION_FETCH, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}
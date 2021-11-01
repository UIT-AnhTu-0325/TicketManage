import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_PROFILE_FAIL, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../constants/userContants"

const url = "http://localhost:2000"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const config = {
            Headers: {
                "Content-type": "application/json"
            }
        }
        const { data } = await axios.post(
            `${url}/api/signin`,
            { email, password },
            config
        )
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        localStorage.setItem("userInfo", JSON.stringify(data));
        localStorage.setItem("id", data.user._id);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("contact", data.user.contactNumber);
        localStorage.setItem("lastName", data.user.lastName);
        localStorage.setItem("firstName", data.user.firstName);

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo")
    dispatch({ type: USER_LOGOUT })
}

export const readProfile = () => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_PROFILE_REQUEST })

        const {
            userLogin: { userInfo }
        } = getState()

        //console.log(userInfo.token)

        // const config = {
        //     Headers: {
        //         "Content-Type": "application/json",
        //         Authorization: `Bearer ${userInfo.token}`,
        //     }
        // }

        //console.log(config)

        const { data } = await axios.get(`${url}/api/my-profile`, { 'headers': { 'Authorization': `Bearer ${userInfo.token}` } })


        console.log(data)

        dispatch({ type: USER_PROFILE_SUCCESS, payload: data })

        //dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

        localStorage.setItem("myProfile", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_PROFILE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const updateProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_REQUEST })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            Headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(`${url}/api/update-profile`, user, { 'headers': { 'Authorization': `Bearer ${userInfo.token}` } })

        dispatch({ type: USER_UPDATE_SUCCESS, payload: data })

        //dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

        localStorage.setItem("myProfile", JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}
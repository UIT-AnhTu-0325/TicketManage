import { ANALYTICS_FAIL, ANALYTICS_REQUEST, ANALYTICS_SUCCESS, ANALYTICS_CHART_REQUEST, ANALYTICS_CHART_SUCCESS, ANALYTICS_CHART_FAIL, NEW_USER_REQUEST, NEW_USER_SUCCESS, NEW_USER_FAIL, TICKET_DONUT_REQUEST, TICKET_DONUT_SUCCESS, TICKET_DONUT_FAIL } from "../constants/analyticsConstants"


export const analyticsReducer = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case ANALYTICS_REQUEST:
            return { loading: true }
        case ANALYTICS_SUCCESS:
            return {
                totalTicket: action.payload.totalTicket,
                totalSale: action.payload.totalSale,
                loading: false,
            };
        case ANALYTICS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const analyticsChartReducer = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case ANALYTICS_CHART_REQUEST:
            return { loading: true }
        case ANALYTICS_CHART_SUCCESS:
            return {
                listTicket: action.payload.listTicket,
                listSale: action.payload.listSale,
                loading: false,
            };
        case ANALYTICS_CHART_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const newUserReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_USER_REQUEST:
            return { loading: true }
        case NEW_USER_SUCCESS:
            return {
                loading: false,
                listNewUser: action.payload
            }
        case NEW_USER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const ticketDonutReducer = (state = {}, action) => {
    switch (action.type) {
        case TICKET_DONUT_REQUEST:
            return { loading: true }
        case TICKET_DONUT_SUCCESS:
            return {
                donutData: action.payload,
                loading: false,
            };
        case TICKET_DONUT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
import {
    ANALYTICS_FAIL, ANALYTICS_REQUEST, ANALYTICS_SUCCESS,
    ANALYTICS_CHART_REQUEST, ANALYTICS_CHART_SUCCESS, ANALYTICS_CHART_FAIL,
    NEW_USER_REQUEST, NEW_USER_SUCCESS, NEW_USER_FAIL,
    TICKET_DONUT_REQUEST, TICKET_DONUT_SUCCESS, TICKET_DONUT_FAIL,
    CURRENT_DATE_REQUEST, CURRENT_DATE_SUCCESS, CURRENT_DATE_FAIL,
    CHART_ENTERPRISE_REQUEST, CHART_ENTERPRISE_SUCCESS, CHART_ENTERPRISE_FAIL,
    LIST_ENTERPRISE_REQUEST, LIST_ENTERPRISE_SUCCESS, LIST_ENTERPRISE_FAIL, NAME_CHART_ENTERPRISE_REQUEST, NAME_CHART_ENTERPRISE_SUCCESS, NAME_CHART_ENTERPRISE_FAIL, LAST_ORDER_REQUEST, LAST_ORDER_SUCCESS, LAST_ORDER_FAIL
}
    from "../constants/analyticsConstants"

const initState = {
    currentDateData: null,
    loading: false,
    error: false
};

export const lastOrderReducer = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case LAST_ORDER_REQUEST:
            return { loading: true }
        case LAST_ORDER_SUCCESS:
            return {
                listOrder: action.payload,
                loading: false,
            };
        case LAST_ORDER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


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

export const currentDateReducer = (state = initState, action) => {
    switch (action.type) {
        case CURRENT_DATE_REQUEST:
            state = {
                ...state,
                loading: true,
            };
            break;
        case CURRENT_DATE_SUCCESS:
            state = {
                ...state,
                currentDateData: action.payload,
                loading: false,
            };
            break;
        case CURRENT_DATE_FAIL:
            state = {
                ...state,
                loading: false,
                error: action.payload
            };
            break;
        default:
    }
    return state
}

export const chartByEnterprisesReducer = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case CHART_ENTERPRISE_REQUEST:
            return { loading: true }
        case CHART_ENTERPRISE_SUCCESS:
            return {
                booking: action.payload.booking,
                sale: action.payload.sale,
                loading: false,
            };
        case CHART_ENTERPRISE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const listByEnterprisesReducer = (state = {}, action) => {
    switch (action.type) {
        case LIST_ENTERPRISE_REQUEST:
            return { loading: true }
        case LIST_ENTERPRISE_SUCCESS:
            return {
                listEnterprises: action.payload,
                loading: false,
            };
        case LIST_ENTERPRISE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const nameChartByEnterprisesReducer = (state = {}, action) => {
    switch (action.type) {
        case NAME_CHART_ENTERPRISE_REQUEST:
            return { loading: true }
        case NAME_CHART_ENTERPRISE_SUCCESS:
            return {
                listName: action.payload,
                loading: false,
            };
        case NAME_CHART_ENTERPRISE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
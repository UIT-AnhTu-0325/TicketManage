import { ANALYTICS_FAIL, ANALYTICS_REQUEST, ANALYTICS_SUCCESS, ANALYTICS_CHART_REQUEST, ANALYTICS_CHART_SUCCESS, ANALYTICS_CHART_FAIL } from "../constants/analyticsConstants"

export const analyticsReducer = (state = {}, action) => {
    switch (action.type) {
        case ANALYTICS_REQUEST:
            return { loading: true }
        case ANALYTICS_SUCCESS:
            return { loading: false, listOfAnalytics: action.payload }
        case ANALYTICS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const analyticsChartReducer = (state = {}, action) => {
    switch (action.type) {
        case ANALYTICS_CHART_REQUEST:
            return { loading: true }
        case ANALYTICS_CHART_SUCCESS:
            return { loading: false, listOfAnalyticsChart: action.payload }
        case ANALYTICS_CHART_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
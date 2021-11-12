import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import userReducer from "./user.reducer";
import routeReducer from "./route.reducers";
import enterpriseReducer from "./enterprise.reducers";
import { analyticsChartReducer, analyticsReducer } from "./analyticsReducers";
import cityReducers from "./city.reducers";
import vehicleReducers from "./vehicle.reducers";
import tripReducers from "./trip.reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  route: routeReducer,
  enterprise: enterpriseReducer,
  analytics: analyticsReducer,
  chart: analyticsChartReducer,
  city: cityReducers,
  vehicle: vehicleReducers,
  trip: tripReducers,
});

export default rootReducer;

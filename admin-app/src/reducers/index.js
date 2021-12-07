import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import userReducer from "./user.reducer";
import routeReducer from "./route.reducers";
import enterpriseReducer from "./enterprise.reducers";
import {
  analyticsChartReducer,
  analyticsReducer,
  newUserReducer,
  ticketDonutReducer,
} from "./analyticsReducers";
import cityReducers from "./city.reducers";
import vehicleReducers from "./vehicle.reducers";
import tripReducers from "./trip.reducers";
import ticketReducers from "./ticket.reducers";
import user_ticket from "./user_ticket";

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
  newUser: newUserReducer,
  ticket: ticketDonutReducer,
  ticketR: ticketReducers,
  user_ticket
});

export default rootReducer;

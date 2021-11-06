import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import userReducer from "./user.reducer";
import routeReducer from "./route.reducers";
import enterpriseReducer from "./enterprise.reducers";
import cityReducers from "./city.reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  route: routeReducer,
  enterprise: enterpriseReducer,
  city: cityReducers,
});

export default rootReducer;

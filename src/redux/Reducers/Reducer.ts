import { serviceMethodReducer } from "features/Booking/reducers/BookingReducer";
import { combineReducers } from "redux";

const mainReducer = combineReducers({
  serviceMethod: serviceMethodReducer,
});

export default mainReducer;

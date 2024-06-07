import { createStore } from "redux";
import mainReducer from "redux/Reducers/Reducer";

const store = createStore(mainReducer);

export default store;

import { configureStore } from "@reduxjs/toolkit";
import credentialReducer from "redux/Slice/CredentialSlice";

const store = configureStore({
  reducer: {
    credential: credentialReducer,
  },
});

export default store;

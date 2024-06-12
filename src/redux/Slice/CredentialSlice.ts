import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  username: "",
  email: "",
  role: "",
  customer: {
    name: "",
  },
};

const credentialSlice = createSlice({
  name: "user-credential",
  initialState,
  reducers: {},
});

export default credentialSlice.reducer;

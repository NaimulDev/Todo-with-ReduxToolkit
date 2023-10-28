import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Naimul",
  email: "naimul@gmail.com",
  userTasks: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export default userSlice.reducer;

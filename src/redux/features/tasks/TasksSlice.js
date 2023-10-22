import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "TasksSlice",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;

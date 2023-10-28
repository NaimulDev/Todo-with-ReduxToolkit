import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/TasksSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
    userSlice: userSlice,
  },
});

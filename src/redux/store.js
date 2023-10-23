import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/TasksSlice";

export const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
  },
});

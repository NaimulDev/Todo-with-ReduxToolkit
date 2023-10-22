import { configureStore } from "@reduxjs/toolkit";
import TasksSlice from "./features/tasks/TasksSlice";

export const store = configureStore({
  reducer: {
    tasks: TasksSlice,
  },
});

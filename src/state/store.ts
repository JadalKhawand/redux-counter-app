import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/CounterSlice";

interface RootState {
  counter: {
    value: number;
  };
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers here if you have them
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

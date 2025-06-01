import { configureStore } from "@reduxjs/toolkit";
import loading from "./loading/loading";
import auth from "./auth/auth";

export const store = configureStore({
  reducer: {
    loading: loading,
    auth: auth,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

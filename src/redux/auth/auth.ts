import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session } from "@supabase/supabase-js";

interface AuthState {
  session: Session | null;
}

const initialState: AuthState = {
  session: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<Session>) => {
      state.session = action.payload;
    },
    removeSession: (state) => {
      state.session = null;
    },
  },
});

export const { setSession, removeSession } = authSlice.actions;

export default authSlice.reducer;

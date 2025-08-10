import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserSession {
  email: string;
  avatar: string | null;
  fullName: string | null;
  id: string;
  created_at: string;
}

interface AuthState {
  session: IUserSession | null;
}

const initialState: AuthState = {
  session: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<IUserSession>) => {
      state.session = action.payload;
    },
    removeSession: (state) => {
      state.session = null;
    },
  },
});

export const { setSession, removeSession } = authSlice.actions;

export default authSlice.reducer;

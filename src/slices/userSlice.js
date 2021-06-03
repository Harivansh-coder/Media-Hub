import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: () => {},
  },
});

const userReducer = userSlice.reducer;

export const { setUser } = userSlice.actions;

export const selectUser = (state, action) => state.user.user;

export default userReducer;

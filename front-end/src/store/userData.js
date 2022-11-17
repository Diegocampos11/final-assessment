import { createSlice } from "@reduxjs/toolkit";

export const userData = createSlice({
  name: "userData",
  initialState: {
    value: {}
  },
  reducers: {
    increment: {
      reducer(state, action) {
        state.value = action.payload
      }
    }
  }
});

export const { increment } = userData.actions

export default userData.reducer
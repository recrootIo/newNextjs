import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentScreen: "",
};

const candidateSlice = createSlice({
  name: "candidate",
  initialState,
  reducers: {
    updateCurrentScreen: (state, action) => {
      return {
        ...state,
        currentScreen: action.payload,
      };
    },
  },
});

export const { updateCurrentScreen } = candidateSlice.actions;

export default candidateSlice.reducer;

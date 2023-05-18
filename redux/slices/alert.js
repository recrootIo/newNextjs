import { SUCCESS } from "@/utils/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: SUCCESS,
  open: false,
  message: "",
};

const AlertSlice = createSlice({
  name: "alertMessage",
  initialState,
  reducers: {
    openAlert: (state, action) => {
      const { type, message } = action.payload;
      return {
        ...state,
        open: true,
        type: type || SUCCESS,
        message: message,
      };
    },
    clearAlert: (state, action) => {
      return {
        ...state,
        open: false,
        message: "",
        type: SUCCESS,
      };
    },
  },
});

export const { openAlert, clearAlert } = AlertSlice.actions;

export default AlertSlice.reducer;

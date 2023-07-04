import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import interviewss from "../services/interviewservice";
const interviewservice = new interviewss()

const initialState = {
  scheduleinterview: { search: [] },
  schedules: [],
  partcInt:[]
};

export const interview = createAsyncThunk(
  "scheduleinterview",
  async (data1) => {
    return data1;
  }
);
export const setinterview = createAsyncThunk(
  "scheduleinterviewSet",
  async (data1) => {
    return data1;
  }
);

export const getSchedules = createAsyncThunk("get/train", async () => {
  const user = JSON.parse(localStorage.getItem("User"));
  const res = await interviewservice.getAll(user.User.companyId);
  return res.data;
});
export const getSchedulesInterview = createAsyncThunk("get/scheduled", async ({cid,jid}) => {
  console.log(cid,jid,'jjjjjjj')
  const res = await interviewservice.getScheduleInt(cid,jid);
  return res.data;
});

const intSlice = createSlice({
  name: "sinterview",
  initialState,
  extraReducers: {
    [interview.fulfilled]: (state, action) => {
      state.scheduleinterview = action.payload;
    },
    [getSchedules.fulfilled]: (state, action) => {
      state.schedules = action.payload;
    },
    [setinterview.fulfilled]: (state, action) => {
      state.scheduleinterview = action.payload;
    },
    [getSchedulesInterview.fulfilled]: (state, action) => {
      state.partcInt = action.payload;
    },
  },
});

const { reducer } = intSlice;

export default reducer;

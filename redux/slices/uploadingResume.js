import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import resumeService from "../services/resume.service";
export const uplodeResumeFiles = createAsyncThunk(
  "resume/uplodeResume",
  async ({ ...values }, thunkAPI) => {
    const user = JSON.parse(localStorage.getItem("User"));
    try {
      console.log(values, "values");
      const response = await resumeService.updateResume(
        values.uplodeResumeFile,
        user.User._id
      );
      return response.data;
    } catch (error) {
      console.log(
        error,
        "error"
      )(error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return error;
    }
  }
);

export const validResumefile = createAsyncThunk(
  "resume/valdi",
  async (file) => {
    try {
      const response = await resumeService.validResume(file);
      return response;
    } catch (error) {
      console.log(
        error,
        "error"
      )(error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return error;
    }
  }
);

export const createResumeDetails = createAsyncThunk(
  "resume/cerateResume",
  async ({ ...values }, thunkAPI) => {
    const user = JSON.parse(localStorage.getItem("User"));
    try {
      const response = await resumeService.createResumeDetails(
        values,
        user.User._id
      );
      console.warn(response);
      return values;
    } catch (error) {
      (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue();
    }
  }
);

export const updateFinalResumeForm = createAsyncThunk(
  "resume/updateFinalResume",
  async ({ ...values }, thunkAPI) => {
    const user = JSON.parse(localStorage.getItem("User"));
    try {
      await resumeService.finalResumeForm(values, user.User._id);
      return values;
    } catch (error) {
      console.warn(error);
    }
  }
);

export const updateLoadingStatus = createAsyncThunk(
  "set/updateLoadingStatus",
  async (data) => {
    return data;
  }
);

const initialState = {
  loading: false,
  redirect: false,
  profileCompleted: false,
};
const resumeSlice = createSlice({
  name: "resume",
  initialState,
  extraReducers: {
    [uplodeResumeFiles.fulfilled]: (state, action) => {
      // state.uplodeResumeFiles = true;
      // state.createResume = false;
    },
    [uplodeResumeFiles.rejected]: (state, action) => {
      state.uplodeResumeFiles = false;
      state.createResume = false;
    },
    [createResumeDetails.fulfilled]: (state, action) => {
      state.createResume = true;
    },
    [createResumeDetails.rejected]: (state, action) => {
      state.createResume = false;
    },
    [updateFinalResumeForm.fulfilled]: (state, action) => {
      state.uplodeResumeFiles = true;
      state.loading = "false";
      state.redirect = true;
      state.profileCompleted = true;
    },
    [updateFinalResumeForm.pending]: (state, action) => {
      state.loading = true;
    },
    [updateFinalResumeForm.rejected]: (state, action) => {
      state.uplodeResumeFiles = false;
    },
    [updateFinalResumeForm.rejected]: (state, action) => {
      state.uplodeResumeFiles = false;
    },
    [updateLoadingStatus.fulfilled]: (state, action) => {
      state.loading = true;
    },
  },
  reducers: {
    setResume: (state, action) => {},
    clearMessage: () => {},
  },
});
const { reducer, actions } = resumeSlice;
export const { setResume, clearMessage } = actions;
export default reducer;
